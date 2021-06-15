select o.order_id, o.order_date, c.first_name, o.status, os.name as 'Order Status Name'
from sql_store.orders o
join customers c
	on o.customer_id = c.customer_id
join sql_store.order_statuses os
	on o.status = os.order_status_id

select *
from sql_store.order_items oi
join sql_store.order_item_notes oin
on oi.order_id = oin.order_Id;

select *
from sql_store.orders o, sql_store.customers c
where o.customer_id = c.customer_id;

select c.customer_id, c.first_name, o.order_id
from sql_store.orders o
left join sql_store.customers c
on c.customer_id = o.customer_id
order by o.order_id;

select c.customer_id, c.first_name, o.order_id, sh.name as 'Shipper Name'
from sql_store.customers c
left join sql_store.orders o
on c.customer_id = o.customer_id
left join sql_store.shippers sh
on o.shipper_id = sh.shipper_id
where o.order_id is Not null
order by c.customer_id;

select *
from sql_store.orders o
join sql_store.customers c
on o.customer_id = c.customer_id
join sql_store.shippers sh
using (shipper_id);

select *
from sql_store.order_items oi
join sql_store.order_item_notes oin
-- on oi.order_Id = oin.order_Id and oi.product_id = oin.product_id;
using(order_id, product_id);


select *
from sql_store.orders o 
natural join sql_store.customers c;
-- on o.customer_id = c.customer_id;

select *
from sql_store.customers c
cross join sql_store.products p
order by c.first_name;


select order_id, order_date, 'Active' as status
from sql_store.orders
where order_date >= '2019-01-01'
union
select order_id, order_date, 'Archived' as status
from sql_store.orders
where order_date <= '2017-01-22';

-- insert into sql_store.customers
-- values(16, 'Nicoleta','Ungureanu', '1991-10-07', '+4072456538','Str. Ceva', 'Bucuresti','RO', 7000);

-- delete from sql_store.customers where first_name = 'Nicoleta' and customer_id in (11,12,13,14,15);

-- insert into sql_store.products (name, quantity_in_stock,unit_price)
-- values ('xiaomi', 7, 10), ('iphone', 2, 80), ('dell', 5, 42.99);

-- insert into sql_store.orders(customer_id, order_date, status)
-- values(16, '2021-06-10', 1);
-- insert into sql_store.order_items
-- values(LAST_INSERT_ID(), 11, 2, 10.10);

-- create table sql_store.orders_archived as select * from orders;
-- insert into orders_archived
-- select * from orders where order_date < '2019-01-01';

-- update sql_invoicing.invoices
-- set payment_total = 10, payment_date = '2021-06-10'
-- where invoice_id = 1;

-- update sql_invoicing.invoices
-- set payment_total = invoice_total * 0.05,
-- payment_date = '2021-06-10'
-- where client_id in (3, 5) and payment_total = 0;


-- update sql_invoicing.invoices
-- set payment_total = invoice_total * 0.05,
-- payment_date = '2021-06-10'
-- where client_id in (select client_id from sql_invoicing.clients where state in ('ca', 'ny')) and payment_total = 0 and invoice_id = 1;

-- delete from sql_invoicing.invoices
-- where client_id = (select client_id from clients where name = 'Myworks')

select distinct client_id, sum(invoice_total) as total_sales
from sql_invoicing.invoices
-- group by client_id
-- order by total_sales;

-- SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));

-- select state, city, sum(invoice_total) as total_sales
-- from sql_invoicing.invoices
-- join sql_invoicing.clients using (client_id)
-- group by state, city
-- order by total_sales desc;

-- select client_id, sum(invoice_total) as total_sales, count(*) as number_of_invoices
-- from sql_invoicing.invoices
-- group by client_id
-- having total_sales > 500 and number_of_invoices > 5;

-- select state, city, sum(invoice_total) as total
-- from sql_invoicing.invoices
-- join sql_invoicing.clients
-- 	using (client_id)
-- group by state, city with rollup;

-- select *
-- from sql_store.orders
-- where 

-- 1st January, 2021
-- select date_format('2021-01-01', '%D %M, %Y');

-- select date_add(now(), interval -1 day) as date;

-- select datediff('2021-01-01', '2021-09-10');

-- select time_to_sec('09:00');

-- select order_id, ifnull(shipper_id, 'not assigned') as shipper
-- from sql_store.orders;

-- select order_id, coalesce(comments, shipper_id, 'not assigned')
-- from sql_store.orders;

-- select order_id, order_Date, if(year('2019-01-01') = year(order_Date), 'active', 'archive') as isActive
-- from sql_store.orders;

-- select order_id, order_Date,
-- 	case 
-- 		when year(order_date) = year(now()) - 2 then 'active'
--         when year(order_Date) = year(now()) - 3 then 'last year'
--         else ' future'
-- 	end as category
-- from sql_store.orders;

-- create view sales_by_client as 
-- select c.client_id, c.name, sum(invoice_total) as total_sale
-- from sql_invoicing.clients c
-- join sql_invoicing.invoices i
-- using(client_id)
-- group by client_id, name;
-- use sql_invoicing;
-- view -> remove the data from the view
-- create or replace view invoices_with_balance as
-- select invoice_id, client_id, due_date
-- from sql_invoicing.invoices
-- where (invoice_total - payment_total) > 0;

-- use sql_store;
-- drop view invoices_with_balance;

-- select * from sql_invoicing.invoices_wtih_balance;
-- delete from invoices_wtih_balance;

-- delimiter $$
-- 	create procedure get_clients()
--     begin
-- 		select * from clients;
--     end $$
-- delimiter;

-- call get_clients_by_state('CA')

-- drop procedure if exists get_clients_by_state
-- delimiter $$
-- 	create procedure get_clients(state char(2))
--     begin
-- 		select * from clients c where c.state = state;
--     end $$
-- delimiter;

-- get payments
-- client_id => int(4)
-- payment_method_id => tinyint(1) 0-9
-- payments

-- drop procedure if exists get_payments
-- delimiter $$
-- 	create procedure get_payments(client_id int(4), payment_method_id tinyint(1))
--     begin
-- 		select * from payments p where  p.client_id = client_id and p.payment_id = payment_method_id;
--     end $$
-- delimiter ;

-- call get_payments(1, 1); 
-- delimiter $$
-- 	drop procedure if exists make_payment;
-- 	create procedure make_payment(
-- 		invoice_id int,
-- 		payment_amount decimal(4,2),
-- 		payment_date date
-- 	)
-- 	begin
-- 		update invoices i
-- 		set payment_total = payment_amount,
-- 		payment_date = payment_date
-- 		where i.invoice_id = invoice_id
-- 	end $$
-- delimiter ;

-- SELECT -- AX(invoice_date) FROM invoices;




