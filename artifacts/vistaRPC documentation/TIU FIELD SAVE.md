---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU FIELD SAVE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU FIELD SAVE{:/}
 tag | {::nomarkdown}SAVE{:/}
 routine | [TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Saves a single Template Field{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} |  |  |  | {::nomarkdown}IEN of dialog field, if any{:/} | 
| {::nomarkdown}TIUX{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Data to save in template field{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SAVE^[TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html)
 Method comment | Save Template Field
 Input parameters | {::nomarkdown}TIUDA, TIUX{:/}
 First comment | {::nomarkdown}<pre> Input:<br/>   TIUDA=IEN of TEMPLATE record<br/>   TIUX(SEQ)=IEN of item<br/> Output:<br/>   SUCCESS=IEN of item if successful, or<br/>           0^ Explanatory message if not</pre>{:/}
 Code | {::nomarkdown}  N FLD,TMP<br> S SUCCESS=""<br> I (+TIUDA'>0)!($G(TIUX(.01))'="") D  Q:$P(SUCCESS,U,1)="0"<br> . I $L($G(TIUX(.01)))<3 D  Q<br> . . S SUCCESS="0^Template Field name must be at least 3 characters"<br> . S TIUX(.01)=$$UPPER^TIULS(TIUX(.01))<br> . N FOUNDIEN<br> . S FOUNDIEN=$O(^TIU(8927.1,"B",TIUX(.01),0))<br> . I FOUNDIEN>0,FOUNDIEN'=TIUDA D  Q<br> . . S SUCCESS="0^"_TIUX(.01)_" is not a unique name"<br> . I +TIUDA'>0 D<br> . . S TIUDA=$$CREATE($G(TIUX(.01)))<br> S SUCCESS=TIUDA Q:'+SUCCESS<br> D LOCK^TIUSRVF1(.TMP,TIUDA)<br> I TMP=0 D  Q<br> . S SUCCESS="0^Template Field currently being edited by another user"<br> F FLD=2,10 D<br> . I +$O(TIUX(FLD,0)) D  Q:$D(TIUX)'>9<br> . . K ^TIU(8927.1,TIUDA,FLD)<br> . . I $G(TIUX(FLD,1))="@" K TIUX(FLD) Q<br> . . M ^TIU(8927.1,TIUDA,FLD)=TIUX(FLD) K TIUX(FLD)<br> . . D SETXT0(TIUDA,FLD)<br> I $D(TIUX)>9 D FILE(.SUCCESS,""""_TIUDA_",""",.TIUX)<br> D UNLOCK^TIUSRVF1(.TMP,TIUDA){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">Executable Only</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}