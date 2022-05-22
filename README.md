# Binar Academy Bootcamp - FSW - Chapter 8 - Challenge

Monolith Dashboard - Andri Al Fariqi -

Ini merupakan aplikasi penjualan sayuran sederhana

untuk menjalankan aplikasi tersebut

- clone https://github.com/andrifariqi/binar-challenge-chapter-8.git
- switch branch to monolith-dashboard-andrialfariqi
- open vscode then npm install -> sequelize db:create -> sequelize db:migrate
- npm start
- open browser -> http://localhost:3000/
- create account in register page, select admin / staff, admin can have all access -> login, you can use forgot password feature if you forgot the password
- at home page showing the latest item and order by stock
- at item page have add, update, delete menu for admin, and also have search and add to cart menu for staff/admin, search menu by itemname and brand name
- at item if the stock 0 you can't add to cart, "message": "Out of stock !", and if you add to cart the amount of stock will decrease by 1 also your cart will increase by 1
- at cart page showing what item do you want to buy, if you don't want, just remove it with the button delete, and then the amount of quantity of item will send back to the stock
- if everything okay, just click generate invoice, please take a look for a second inside the folder pdf -> there are your invoice , after that the list of the cart will dissapear
