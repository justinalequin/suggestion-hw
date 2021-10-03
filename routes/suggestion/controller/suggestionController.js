const Suggestion = require("../modal/Suggestion.js");

module.exports = {

    getAllSuggestions:(body,callback)=>{
        Suggestion.find(body,(err,foundAllSuggestions)=>{
            if(err){
                callback(err,null);
            }else{
                callback(null, foundAllSuggestions);
            }
        });
    },


    getOneSuggestion:(id,body,callback)=>{
        Suggestion.find(id,body,(err,foundSuggestion)=>{
            if(err){
                callback(err,null);
            }else{
                callback(null, foundSuggestion);
            }
        });
    },

    createSuggestion:(body,callback)=>{
        const createdSuggestion = new Suggestion({
            tittle: body.tittle,
            author: body.author,
            suggestion: body.suggestion,
            likes: body.likes,
            anonymous: body.anonymous,
            timeCreated:  body.timeCreated
        });

        createdSuggestion.save((err,savedSuggestion)=>{
            if(err){
                callback(err,null);
            }else{
                callback(null, savedSuggestion);
            }
        });
    },


    updateSuggestion:(id,body,callback)=>{
        Suggestion.findByIdAndUpdate(id,body,{new:true},(err,updateSuggestion)=>{
            if(err){
                callback(err,null);
            }else{
                callback(null, updateSuggestion);
            }
        });
    },


    deleteSuggestion:(id,callback)=>{
        Suggestion.findByIdAndDelete(id,(err,deletedSuggestion)=>{
            if(err){
                callback(err,null);
            }else{
                callback(null, deletedSuggestion);
            };
        });
    }
};

