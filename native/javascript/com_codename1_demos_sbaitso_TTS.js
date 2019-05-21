(function(exports){

var o = {};

    o.say__java_lang_String = function(param1, callback) {
        if ('speechSynthesis' in window) {
            var msg = new SpeechSynthesisUtterance(param1);
            window.speechSynthesis.speak(msg);        
        }
        callback.complete();   
    };

    o.isSupported_ = function(callback) {
        callback.complete(true);
    };

exports.com_codename1_demos_sbaitso_TTS= o;

})(cn1_get_native_interfaces());
