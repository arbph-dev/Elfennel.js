/**
 *  gestion XHR
 */
export class HttpReq 
{
  #STATE = -1 
  #XHR = null 

  /**
   * 
   */  
  constructor() 
  {
    this.#XHR = new XMLHttpRequest()
  }


  // default d callabck cb => dcb + Event Load => dcbLoad
  // PE progresseEvent
  /**
   * 
   * @param {*} PE 
   */ 
  dcbLoad(PE)
  {
    console.log( "file : reqxhr, class HttpReq , event load => default callback" )
    console.log( PE )
  }


/**
 * 
 * @param {*} METHOD 
 * @param {*} URL 
 * @param {*} ASYNC 
 * @param {*} callbacks 
 */
  Request( METHOD = "GET" ,  URL = "", ASYNC = true, callbacks = { load: null, progress: null, error: null, abort: null }    ) 
    {
        if ( (URL != "" ) && (METHOD != "") )
        {

            this.#XHR.open( METHOD , URL , ASYNC )
            this.#XHR.send()
            /* ----  ====================================    load    ==========================================  ---- */            
            if (callbacks.load != null) {
                this.#XHR.addEventListener("load", callbacks.load)
            }
            else
            {
                this.#XHR.addEventListener("load",this.dcbLoad)
                console.log( "file : reqxhr, class HttpReq , event load => no callback , callback by default" )
            }
            /* ----  ====================================    progress    ==========================================  ---- */   
            if (callbacks.progress != null) {
                this.#XHR.addEventListener("progress", callbacks.progress)
            }
            else
            {
                console.log( "file : reqxhr, class HttpReq , event progress => no callback" )
            }
            /* ----  ====================================    error    ==========================================  ---- */   
            if (callbacks.error != null) {
                this.#XHR.addEventListener("error", callbacks.error)
            }
            else
            {
                console.log( "file : reqxhr, class HttpReq , event error => no callback" )
            }
            /* ----  ====================================    abort    ==========================================  ---- */   
            if (callbacks.abort != null) {
                this.#XHR.addEventListener("abort", callbacks.abort)
            }    
            else
            {
                console.log( "file : reqxhr, class HttpReq , event abort => no callback" )
            }
        }
    }
}  