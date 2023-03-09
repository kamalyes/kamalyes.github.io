<%@ page language="java" contentType="text/html; charset=gb2312" %>
<%@ taglib uri="http://www.victorzhang.com/tags" prefix="taglib" %>
<%@page import="io.github.kamalyes.javaee.taglib.bean.Person" %>
<%@page import="java.util.ArrayList" %>
<%@page import="java.util.List" %>
<%
	List<Person> personList = new ArrayList<Person>();

	int i = 1;

	Person person = new Person();
	person.setId(i++);
	person.setName("����");
	person.setAge(20);
	person.setSex("��");
	person.setAddress("�����к������ϵ�����԰");
	person.setBirthday("2008-08-08");
	person.setMobile("13820080808");
	person.setTelephone("69653234");
	person.setCity("����");

	personList.add(person);

	Person person2 = new Person();
	person2.setId(i++);
	person2.setName("����");
	person2.setAge(20);
	person2.setSex("��");
	person2.setAddress("�����ж��ʳǸ�������ͬ");
	person2.setBirthday("2008-01-01");
	person2.setMobile("13820080808");
	person2.setTelephone("20054879");
	person2.setCity("����");

	personList.add(person2);

	Person person3 = new Person();
	person3.setId(i++);
	person3.setName("����");
	person3.setAge(20);
	person3.setSex("��");
	person3.setAddress("�����ж��ʳǸ�������ͬ");
	person3.setBirthday("2008-01-01");
	person3.setMobile("13820080808");
	person3.setTelephone("20054879");
	person3.setCity("����");

	personList.add(person3);

	Person person4 = new Person();
	person4.setId(i++);
	person4.setName("��������");
	person4.setAge(20);
	person4.setSex("Ů");
	person4.setAddress("�����ж��ʳǸ�������ͬ");
	person4.setBirthday("2008-01-01");
	person4.setMobile("13820080808");
	person4.setTelephone("20054879");
	person4.setCity("����");

	personList.add(person4);

	Person person5 = new Person();
	person5.setId(i++);
	person5.setName("��������");
	person5.setAge(20);
	person5.setSex("��");
	person5.setAddress("�����ж��ʳǸ�������ͬ");
	person5.setBirthday("2008-01-01");
	person5.setMobile("13820080808");
	person5.setTelephone("20054879");
	person5.setCity("����");

	personList.add(person5);

	Person person6 = new Person();
	person6.setId(i++);
	person6.setName("��������");
	person6.setAge(20);
	person6.setSex("Ů");
	person6.setAddress("�����ж��ʳǸ�������ͬ");
	person6.setBirthday("2008-01-01");
	person6.setMobile("13820080808");
	person6.setTelephone("20054879");
	person6.setCity("����");

	personList.add(person6);

	Person person7 = new Person();
	person7.setId(i++);
	person7.setName("��������");
	person7.setAge(20);
	person7.setSex("��");
	person7.setAddress("�����к�����������ּ�36������A");
	person7.setBirthday("2008-01-01");
	person7.setMobile("13820080808");
	person7.setTelephone("20054879");
	person7.setCity("����");

	personList.add(person7);

	request.setAttribute("personList", personList);
%>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
	<title>Insert title here</title>
	<link href="style/style.css" rel="stylesheet" type="text/css"/>
	<style>
		.resizeDivClass {
			position: relative;
			width: 2px;
			z-index: 1;
			left: expression(this .   parentElement .   offsetWidth-1);
			cursor: e-resize;
			float: left;
		}
	</style>

	<script language=javascript>
    function MouseDownToResize(obj) {
      obj.mouseDownX = event.clientX;
      obj.pareneTdW = obj.parentElement.offsetWidth;
      obj.pareneTableW = theObjTable.offsetWidth;
      obj.setCapture();
    }

    function MouseMoveToResize(obj) {
      if (!obj.mouseDownX) return false;
      var newWidth = obj.pareneTdW * 1 + event.clientX * 1 - obj.mouseDownX;
      if (newWidth > 0) {
        obj.parentElement.style.width = newWidth;
        theObjTable.style.width = obj.pareneTableW * 1 + event.clientX * 1 - obj.mouseDownX;
      }
    }

    function MouseUpToResize(obj) {
      obj.releaseCapture();
      obj.mouseDownX = 0;
      var objId = obj.parentElement.id;
      document.cookie = objId + '_width=' + obj.parentElement.style.width;
      document.cookie = theObjTable.id + '_width=' + theObjTable.style.width;
    }

    function readCookie(name) {
      var start1 = document.cookie.indexOf(name + "=");
      if (start1 == -1) return null; else {
        start = document.cookie.indexOf("=", start1) + 1;
        var end = document.cookie.indexOf(";", start);
        if (end == -1) {
          end = document.cookie.length;
        }
        var value = unescape(document.cookie.substring(start, end));
        return value;
      }
    }
	</script>
</head>
<body>

<taglib:table items="${ personList }" url="table.jsp">
	<taglib:column property="id" label="���"/>
	<taglib:column property="name" label="����"/>
	<taglib:column property="age" label="����"/>
	<taglib:column property="sex" label="�Ա�"/>
	<taglib:column property="address" label="��ַ"/>
	<taglib:column property="telephone" label="�绰"/>
	<taglib:column property="mobile" label="�ֻ�"/>
	<taglib:column property="city" label="����"/>
	<taglib:column property="deleted" label="�Ƿ�ɾ��"/>
</taglib:table>

<script type="text/javascript">
  columns[columns.length] = 'theObjTable';
  for (var i = 0; i < columns.length; i++) {
    var width = readCookie(columns[i] + '_width');
    if (width) {
      document.getElementById(columns[i]).style.width = width;
    }
  }
</script>

</body>
</html>
