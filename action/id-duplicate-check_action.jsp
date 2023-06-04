<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.sql.*" %>

<%
  request.setCharacterEncoding("utf-8");

  String checkIdValue = request.getParameter("id_value");

  String message = "";
  boolean flag = true;

  Class.forName("com.mysql.jdbc.Driver");

  Connection connect = DriverManager.getConnection("jdbc:mysql://localhost/daily_DB", "ehdtjs", "1234");

  String sql = "SELECT id FROM user_TB WHERE login_id = ?";
  
  PreparedStatement query = connect.prepareStatement(sql);
  query.setString(1, checkIdValue);

  ResultSet resultSet = query.executeQuery();

  if (resultSet.next()) {
    flag = false;
    message = "이미 사용중인 아이디입니다";

  } else {
    flag = true;
    message = "사용 가능한 아이디입니다";
  }
%>

<script>
  const flag = "<%= flag %>";
  const message = "<%= message %>";

  if (flag === "false") {
    alert(message);
    history.back();

  } else {
    alert(message);
    history.back();
  }
</script>