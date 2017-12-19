var longToWide = function (model,type) {
  var mold = [];
  switch(type){
    case 'binary':
    mold = [['t','tn','r','n'],[['t1','tn1','r1','n1'],['t2','tn2','r2','n2']]];
    break;
    case 'continuous':
    mold = [['t','y','sd','n'],[['t1','y1','sd1','n1'],['t2','y2','sd2','n2']]];
    break;
  }
  var perId = _.groupBy(model,'id');
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
  // console.log('perid',perId,'comps',comps,'res',res);
  // console.log(_.flatten(res));
  return _.flatten(res);
};
