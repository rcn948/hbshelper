var moment = require('moment');

module.exports = function(hbs) {

  hbs.registerHelper("inc", function(value, options)
  {
    return parseInt(value) + 1;
  });

  
  hbs.registerHelper('Date', function(date) {
    return  moment(date).format('YYYY-MM-DD HH:mm:ss');
  });

  hbs.registerHelper('DateOnly', function(date) {
    return  moment(date).format('YYYY-MM-DD');
  });

  hbs.registerHelper('priceToString', function(price) {
    price = Math.round(price);
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') +"원";
  });

  hbs.registerHelper('ifEquals', function(arg1, arg2, options) {
    console.log(arg1, arg2, arg1==arg2)
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
  });

  hbs.registerHelper('select', function( value, options ){
    return options.fn(this)
        .split('\n')
        .map(function(v) {
          var t = 'value="' + value + '"'
          return ! RegExp(t).test(v) ? v : v.replace(t, t + ' selected="selected"')
        })
        .join('\n')
  });

  hbs.registerHelper('selected', function( value, items ){
    return items.map(item=>{
      if(item.id == value){
        return "<option value='"+item.id+"' selected='selected'>"+item.name+"</option>"
      }else {
        return "<option value='"+item.id+"'>"+item.name+"</option>"
      }
    })
  });

  hbs.registerHelper('Checked', function(value) {
    if(value == true){
      return new hbs.SafeString("checked=checked");
    }else {
      return new hbs.SafeString("");
    }
  });

  hbs.registerHelper('NChecked', function(value) {
    if(value == false){
      return new hbs.SafeString("checked=checked");
    }else {
      return new hbs.SafeString("");
    }
  });

  hbs.registerHelper('jsonObject', function (items) {
    var jsonobject =  JSON.parse(items);
    return result;

  });

  hbs.registerHelper('jsonArray', function (items) {
    console.log(items);
    // return JSON.stringify(items)
    var result = [];

    items.map(function(item){
      result.push(JSON.stringify(item))
    })
    return result;

  });

  hbs.registerHelper('Number', function(x) {
    if(x=== undefined || isNaN(x) || x == null){
      return 0;
    }
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  });


}

