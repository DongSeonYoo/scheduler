<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.sql.*" %>

<%
  request.setCharacterEncoding("utf-8");

  String newPwValue = request.getParameter("new_pw_value");
  String findPwuserPk = (String)session.getAttribute("findPwuserPk");

  String message = "";
  boolean flag = true;

  Class.forName("com.mysql.jdbc.Driver");

  Connection connect = DriverManager.getConnection("jdbc:mysql://localhost/daily_DB", "ehdtjs", "1234");

  String sql = "UPDATE user_TB SET password = ? WHERE id = ?";
  
  PreparedStatement query = connect.prepareStatement(sql);
  query.setString(1, newPwValue);
  query.setString(2, findPwuserPk);

  int resultSet = query.executeUpdate();  // 반영된 레코드의 건수 반환

  if (resultSet == 1) {
    flag = true;
    session.removeAttribute("findPwuserPk");
    response.sendRedirect("/");

  } else {
    flag = false;
  }
%>

<script>
  const flag = "<%= flag %>";

  if (flag === "false") {
    alert("알수 없는 오류");
  }
</script>