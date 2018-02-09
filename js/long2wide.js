var longToWide = function (model,flds) {
  var id = _.head(flds)
  var fields = _.rest(flds);
  switch(flds){
    case "binary":
        id = 'id';
    fields = ['t','tn','r','n'];
    break;
    case "continuous":
        id = 'id';
    fields = ['t','y','sd','n'];
    break;
  }
  moldFields = function(fields){
    var mold = _.unzip(
      _.map(fields, function(f){
        return [f.toString()+"1", f.toString()+"2"];
      })
    )
    return [fields].concat([mold]);
  };
  var mold = moldFields(fields);
  var perId = _.groupBy(model,id);
  var comps = _.map(perId, function(st){return getCombinations(st,2)});
  var res = _.map(comps, function(comp) {
    return _.map(comp, function(row) {
      return _.reduce(mold[1], function(r,tm) {
        var mp = _.object(mold[0],tm);
        var i = _.indexOf(mold[1],tm);
        _.map(_.keys(row[i]), function(ok) {
          if(mp[ok]===undefined){
            mp[ok] = ok;
          }
          var nk = mp[ok];
          r[nk] = row[i][ok];
        });
        return r;
      },{});
    });
  });
  return _.flatten(res);
};
