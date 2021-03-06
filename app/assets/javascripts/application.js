// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require_tree .

$(function(){
  $(".tm-input").each(function(){
    var that = this;
    var api = $(this).tagsManager({
      prefilled:$(that).attr('data-tags'),
      AjaxPush: '/tags/add',
      AjaxPushAllTags: true,
      AjaxPushParameters: {
        user:$(that).attr('data-type'),
        on:$(that).attr('data-on'),
        id:$(that).attr('data-id'),
        // taggable_on:$(that).attr('data-on')
      },
    });
    $(this).typeahead({
      minLength:2,
      source:function(query,process){
        $.post('/tags/prefetch',{
          pre:$(that).val()
        },function(data){
          process(data)
        })
      }
    })
    // $(this).typeahead({
    //   name: 'tags',
    //   limit: 15,
    //   prefetch: '/tags/prefetch'
    // }).on('typeahead:selected', function (e, d) {
    //   api.tagsManager("pushTag", d.value);
    // });
  })
})