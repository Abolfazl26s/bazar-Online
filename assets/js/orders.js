$(function () {
  $.ajax({
    type: "get",
    url: "../../json/orders.json",
    data: "data",
    dataType: "json",
    success: function (response, status) {
      let orders = [];

      if (status == "success") {
        $.each(response, function (indexInArray, order) {
          let ORStatus, color, url;
          url = "orderInfo.html";
          switch (Number(order.orderStatus)) {
            case 0:
              ORStatus = "درحال بررسی";
              color = "text-warning";
              break;

            case 1:
              ORStatus = "ارسال شده";
              color = "text-success";
              break;

            case 2:
              ORStatus = "لغو شد";
              color = "text-danger";
              break;
          }

          orders.push(
            `
          <tr id="${order.orderId}">
              <td class="order_Num">${order.orderNumber}</td>
              <td class="order_Date">${order.orderDate}</td>
              <td class="${color} order_Status">${ORStatus}</td>
              <td class="order_Total">${order.orderTotal} تومان</td>
              <td><a href="${url}"
                      class="btn showDetailOrder popup-ajax btn-fill-out btn-sm">نمایش</a>
              </td>
          </tr>          
           
          `
          );
        });

        $("#orderTable").find("tbody").append(orders.join());

        // ======== Start: show length of Orders==============
        $("#myAccountPage").find(".countOrders").text(orders.length);
        // ======== End: show length of Orders============

        $(".showDetailOrder").click(function (e) {
          e.preventDefault();
          let OrderId, orderNumber, orderDate, orderStatus, orderTotal;
          OrderId = $(this).parents("tr").attr("id");
          orderNumber = $(this).parents("tr").find(".order_Num").text();
          orderDate = $(this).parents("tr").find(".order_Date").text();
          orderStatus = $(this).parents("tr").find(".order_Status").text();
          orderTotal = $(this).parents("tr").find(".order_Total").text();

          setTimeout(() => {
            $(".orderInfo .card-header").find(".orderNumber").text(orderNumber);
            $(".orderInfo .card-header").find(".orderDate").text(orderDate);
            $(".orderInfo .card-header").find(".orderStatus").text(orderStatus);
            $(".orderInfo .card-header").find(".orderTotal").text(orderTotal);
          }, 100);

          $.ajax({
            type: "get",
            url: "../../json/products.json",
            data: "data",
            dataType: "json",
            success: function (response) {
              let productFilter = [];
              $.each(response, function (indexInArray, products) {
                if (products.orderId == OrderId) {
                  productFilter.push(
                    `
                    <tr>
                          <td class="d-none orderID"></td>
                          <td class="product-thumbnail"><a href="#"><img src="${products.productImageUrl}"
                                      alt="product1"></a>
                                      </td>
                                      <td class="product-name " data-title="نام محصول"><a href="#">
                          ${products.productName}
                          </a>
                          </td>
                          <td data-title="قیمت" class="product-price">${products.productPrice} تومان</td>
                          <td class="product-quantity" data-title="تعداد">
                              <div class="quantity">
                                  ${products.productQuntity}
                                  </div>
                          </td>
                          
                          
                          `
                  );
                }
              });
              setTimeout(() => {
                $(".productTable").find("tbody").append(productFilter.join());
              }, 300);
            },
          });
        });
      } else {
        console.log("Err");
      }
    },
  });
});
