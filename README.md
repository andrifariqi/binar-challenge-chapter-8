# Binar Academy Bootcamp - FSW - Chapter 8 - Challenge

Monolith Dashboard - Andri Al Fariqi -

Ini merupakan aplikasi penjualan sederhana 

untuk menjalankan aplikasi tersebut

1. clone https://github.com/andrifariqi/binar-challenge-chapter-8.git
2. switch branch to monolith-dashboard-andrialfariqi
3. open vscode then npm install -> npm init -y -> sequelize init -> sequelize db:create -> sequelize db:migrate
4. create account in register page, select admin / staff, admin can have all access -> login, you can use forgot password feature if you forgot the password
5. at home page showing the latest item and order by stock
6. at item page have add, update, delete menu for admin, and also have search and add to cart menu for staff/admin, search menu by itemname and brand name
7. at item if the stock 0 you can't add to cart, "message": "Out of stock !", and if you add to cart the amount of stock will decrease by 1 also your cart will increase by 1
8. at cart page showing what item do you want to buy, if you don't want, just remove it with the button delete, and then the amount of quantity of item will send back to the stock
9. if everything okay, just click generate invoice, please take a look for a second inside the folder pdf -> there are your invoice , after that the list of the cart will dissapear

voila, c'est ca mon programme

*program ini masih sederhana dan akan selalu diupdate kembali bersamaan dengan ilmu yang didapat

merci