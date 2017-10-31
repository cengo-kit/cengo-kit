'use strict';

CNG.module({
name: 'pagination',
ieVersion: null,
$el: $('.pagination'),
container: '.pagination',
fn: function () {

  var CNG = CNG || {};

  CNG.Pagination = function(options){

    if(options.pageItems.length < 1) return;

    this.pageItems = options.pageItems;
    this.paginationElement = options.paginationElement;
    this.itemsPerPage = options.itemsPerPage || 10;
    this.totalItems = this.pageItems.length;
    this.numPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.init();
  }

  CNG.Pagination.prototype = {

    init: function(){
      this.hideAll();
      this.initPlugin();
    },

    hideAll: function(){
      this.pageItems.each(function(index, el){
        $(this).css({
          "display": "none"
        });
      });
    },

    initPlugin: function(){
      var self = this;

      this.paginationElement.twbsPagination({
        totalPages: this.numPages,
        visiblePages: 5,
        currentPage: 1,
        first: null,
        last: null,
        cssStyle: '',
        prev: "<",
        next: ">",
        prevClass: "left-icon",
        nextClass: "right-icon",
        activeClass: "active",
        itemOnPage: 8,
        onPageClick: function (event, page) {
          self.showPage(page);
        }
      });
    },

    showPage: function(page){
      this.hideAll();

      for (var i = 0; i < this.itemsPerPage; i++) {
        this.pageItems.eq(i + ( (page - 1) * this.itemsPerPage)).css({
          "display": "block"
        });
      }
    }
  }

  new CNG.Pagination({
    pageItems: $('#articles .article'),
    paginationElement: $('.js-pagination-page'),
    itemsPerPage: parseInt($('#articles').attr('data-perpage'))
  });
}
});
