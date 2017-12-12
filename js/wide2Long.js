var wideToLong = function (model,type) {
  var mold = [];
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
  var res = _.reduce(model, function (long, c){
    var rt = Object.keys(c);
    var nt = _.map(mold[1],function(tm) {
      return _.object(tm,mold[0]);
    });
    _.map(nt, function(no){
      return _.map(rt, function(ok) {
        if (! _.contains(_.flatten(mold[1]),ok)){
          no[ok]=ok;
        }
      });
    });
    var nr = _.map(nt, function(ts){
      return _.reduce(Object.keys(ts), function(nrow,ot) {
         nrow[ts[ot]] = c[ot];
         return nrow;
      },{});
    });
    return long.concat([nr]);
  },[]);
  res = _.map(_.toArray(_.groupBy(_.flatten(res),function(a) {
    var aid = a.id.toString();
    var at = a.t.toString();
    return aid+at;
  })),function(b){return b[0]});
  return res;
}
