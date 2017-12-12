var longToWide = function (model,type) {
  let mold = [];
  switch(type){
    case 'binary':
    mold = [['t','tn','r','n'],[['t1','tn1','r1','n1'],['t2','tn2','r2','n2']]];
    break;
    case 'continuous':
    mold = [['t','y','sd','n'],[['t1','y1','sd1','n1'],['t2','y2','sd2','n2']]];
    break;
  }
  let perId = _.groupBy(model,'id');
  let comps = _.map(perId, function(st){return getCombinations(st,2)});
  let res = _.map(comps, function(comp) {
    return _.map(comp, function(row) {
      return _.reduce(mold[1], function(r,tm) {
        let mp = _.object(mold[0],tm);
        let i = _.indexOf(mold[1],tm);
        _.map(_.keys(row[i]), function(ok) {
          if(mp[ok]===undefined){
            mp[ok] = ok;
          }
          let nk = mp[ok];
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

var wideToLong = function (model,type) {
  let mold = [];
  switch(type){
    case 'binary':
    mold = [['t','r','n'],[['t1','r1','n1'],['t2','r2','n2']]];
    break;
    case 'continuous':
    mold = [['t','y','sd','n'],[['t1','y1','sd1','n1'],['t2','y2','sd2','n2']]];
    break;
    case 'iv':
    mold = [['t'],[['t1'],['t2']]];
    break;
  }
  let res = _.reduce(model, function (long, c){
    let rt = Object.keys(c);
    let nt = _.map(mold[1],function(tm) {
      return _.object(tm,mold[0]);
    });
    _.map(nt, function(no){
      return _.map(rt, function(ok) {
        if (! _.contains(_.flatten(mold[1]),ok)){
          no[ok]=ok;
        }
      });
    });
    let nr = _.map(nt, function(ts){
      return _.reduce(Object.keys(ts), function(nrow,ot) {
         nrow[ts[ot]] = c[ot];
         return nrow;
      },{});
    });
    return long.concat([nr]);
  },[]);
  res = _.map(_.toArray(_.groupBy(_.flatten(res),function(a) {
    let aid = a.id.toString();
    let at = a.t.toString();
    return aid+at;
  })),function(b){return b[0]});
  return res;
}
