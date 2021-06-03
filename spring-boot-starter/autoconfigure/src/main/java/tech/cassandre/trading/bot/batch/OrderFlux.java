package tech.cassandre.trading.bot.batch;

import lombok.RequiredArgsConstructor;
import tech.cassandre.trading.bot.domain.Order;
import tech.cassandre.trading.bot.dto.trade.OrderDTO;
import tech.cassandre.trading.bot.repository.OrderRepository;
import tech.cassandre.trading.bot.service.TradeService;
import tech.cassandre.trading.bot.util.base.batch.BaseFlux;

import java.util.LinkedHashSet;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * Order flux - push {@link OrderDTO}.
 */
@RequiredArgsConstructor
public class OrderFlux extends BaseFlux<OrderDTO> {

    /** Trade service. */
    private final TradeService tradeService;

    /** Order repository. */
    private final OrderRepository orderRepository;

    @Override
    protected final Set<OrderDTO> getNewValues() {
        logger.debug("OrderFlux - Retrieving new values");
        Set<OrderDTO> newValues = new LinkedHashSet<>();

        // Finding which order has been updated.
        tradeService.getOrders()
                .forEach(order -> {
                    logger.debug("OrderFlux - Treating order : {}", order.getOrderId());
                    final Optional<Order> orderInDatabase = orderRepository.findByOrderId(order.getOrderId());

                    // If it's not in database, we insert it only if strategy is set - meaning it's the local order.
                    if (orderInDatabase.isEmpty() && order.getStrategy() != null) {
                        logger.debug("OrderFlux - Local order {} saved : {}", order.getOrderId(), order);
                        newValues.add(order);
                    }

                    // If the local order is already saved in database and this update change the data, it's a change.
                    if (orderInDatabase.isPresent() && !orderMapper.mapToOrderDTO(orderInDatabase.get()).equals(order)) {
                        logger.debug("OrderFlux - Order {} has changed : {}", order.getOrderId(), order);
                        newValues.add(order);
                    }
                });

        logger.debug("OrderFlux - {} order(s) updated", newValues.size());
        return newValues;
    }

    @Override
    protected final Set<OrderDTO> saveValues(final Set<OrderDTO> newValues) {
        Set<Order> orders = new LinkedHashSet<>();

        // We create or update every orders retrieved by the exchange.
        newValues.forEach(newValue -> {
            orderRepository.findByOrderId(newValue.getOrderId())
                    .ifPresentOrElse(order -> {
                        // Update order.
                        orderMapper.updateOrder(newValue, order);
                        orders.add(orderRepository.save(order));
                        logger.debug("OrderFlux - Updating order in database {}", order);
                    }, () -> {
                        // Create order.
                        final Order newOrder = orderMapper.mapToOrder(newValue);
                        orders.add(orderRepository.save(newOrder));
                        logger.debug("OrderFlux - Creating order in database {}", newValue);
                    });
        });

        // We return the saved values.
        return orders.stream()
                .map(orderMapper::mapToOrderDTO)
                .collect(Collectors.toCollection(LinkedHashSet::new));
    }

}
