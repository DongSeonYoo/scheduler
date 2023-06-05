<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.sql.*" %>

<%
  request.setCharacterEncoding("utf-8");

  // signup.js에서 받아온 사용자의 아이디 (검증할 아이디)
  String checkIdValue = request.getParameter("id_value");

  Boolean flag = false;

  Class.forName("com.mysql.jdbc.Driver");

  Connection connect = DriverManager.getConnection("jdbc:mysql://localhost/daily_DB", "ehdtjs", "1234");

  String sql = "SELECT id FROM user_TB WHERE login_id = ?";
  
  PreparedStatement query = connect.prepareStatement(sql);
  query.setString(1, checkIdValue);

  ResultSet resultSet = query.executeQuery();

  if (resultSet.next()) { // 중복된 아이디가 존재하는 경우
    flag = true;

  } else {                // 존재하지 않는 경우
    flag = false;
  }
%>

<body>
  
</body>

<script>
  const flag = "<%= flag %>";

  if (flag === "true") {
    alert("중복된 아이디가 존재합니다"); 

  } else {
    alert("사용 가능한 아이디 입니다");
  }

  history.back();
</script>