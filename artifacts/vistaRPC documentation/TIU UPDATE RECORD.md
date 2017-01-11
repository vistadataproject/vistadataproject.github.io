---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU UPDATE RECORD 

 property | value 
--- | --- 
 label | TIU UPDATE RECORD
 tag | UPDATE
 routine | [TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html)
 return value type | SINGLE VALUE
 description | This API updates the record named in the TIUDA parameter, with theinformation contained in the TIUX(Field #) array.  The body of themodified TIU document should be passed in the TIUX(\TEXT\,i,0) subscript,where i is the line number (i.e., the \TEXT\ node should be ready to MERGEwith a word processing field).  Any filing errors which may occur will bereturned in the single valued ERR parameter (which is passed byreference).


### Method description

 property | value 
--- | --- 
 Method comment | Update existing Document

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ERR | LITERAL |  |  | This is the return parameter, which is passed by reference.  If an erroroccurs, it will be a pointer to the FM dialog file followed by the integer1 in the second \^\-piece (e.g., 8925001^1). | 
| TIUDA | LITERAL |  | true | This is the record # (IEN) of the TIU Document in file #8925. | 
| TIUX | LIST |  | true | This is the input array which contains the data to be filed in themodified document.  It should look something like this: TIUX(.02)=45678TIUX(1301)=2960703.104556TIUX(1302)=293764TIUX(\TEXT\,1,0)=\The patient is a 70 year old WHITE MALE, who presentedto the ONCOLOGY CLINIC\TIUX(\TEXT\,2,0)=\On JULY 3, 1996@10:00 AM, with the chief complaint ofNECK PAIN...\ | 
| SUPPRESS | LITERAL |  | true | This BOOLEAN Flag is passed in to suppress the call to the COMMIT CODE forthe TIU DOCUMENT in question (i.e., SUPPRESS=1 ==> don't execute commitcode; SUPPRESS=0 or UNDEFINED ==> DO execute commit code). | 