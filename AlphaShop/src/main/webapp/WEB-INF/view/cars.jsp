<%--
  Created by IntelliJ IDEA.
  User: Si2001
  Date: 09/06/2023
  Time: 12:21
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<div class="jumbotron jumbotron-billboard">
  <div class="img"></div>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <h2>${Titolo}</h2>
        <p>${Titolo2}</p>
      </div>
    </div>
  </div>
</div>
<section class="container">
  <div class="row">
    <div class = "col-md-6 col-sm-6">
      <h3 class="page-title">Risultati Ricerca</h3>
    </div>
    <table id="articoli" class="table table-striped table-bordered">
      <thead>
      <tr>
        <th>CodArt</th>
        <th>Descrizione</th>
        <th>Peso(KG/LT)</th>
        <th>Categoria</th>
        <th></th>
      </tr>
      </thead>
      <tfoot>
      </tfoot>
      <tbody>
      <c:forEach items="${Cars}" var="car">
        <tr>
          <td>${car.id}</td>
          <td>${car.brand}</td>
          <td>${car.model}</td>
          <td>${car.color}</td>
          <td>
            <a href=" <spring:url value="/articoli/infoart/${articolo.codArt}" /> " class="btn btn-primary">
              <span class="oi oi-plus"></span></span> Dettaglio
            </a>
          </td>
        </tr>
      </c:forEach>
      </tbody>
    </table>
  </div>
</section>
