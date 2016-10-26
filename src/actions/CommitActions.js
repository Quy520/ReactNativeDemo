import * as types from './actionTypes';
 export function doCommit (id,name,phone,location){
     return dispathch=>{
         const params={
             headers:{
                 'Accept':'application/json',
                 'Content-Type':'application/x-www-from-urlencoded'
                 
             },
             method:'POST',
             body: 'id' + id + ',name' + name + ',phone' + phone + ',location' + location
         }
         fetch('http://api.shztzn.com/api/v1.0/manage/check-in',params).then(response=>response.json()).then(
             responseDate=>{
                 console.log(responseDate);
                 if(responseDate.errorCode==0){
                     dispathch(commitSuccessed());
                 }else{
                      dispatch(commitFailed(responseData.errorCode));
                 }
             }
         )
         .catch(err=>{
             console.error('An error occurred',err);
         })
         .done();
     }
 }
 function commitSuccessed(){
     return{
         type: types.COMMIT_DEVICEINFO,
        errorCode: 0
     }
 }

 function commitFailed(errCode) {
    return {
        type: types.COMMIT_DEVICEINFO_FAILED
        errorCode: errCode
    }
}