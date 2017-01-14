---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; TIU FIELD SAVE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}TIU FIELD SAVE{:/}
 tag | {::nomarkdown}SAVE{:/}
 routine | [TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Saves a single Template Field{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} |  |  |  | {::nomarkdown}IEN of dialog field, if any{:/} | 
| {::nomarkdown}TIUX{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Data to save in template field{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | SAVE^[TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html)
 Method comment | Save Template Field
 First comment | {::nomarkdown}Input:<br/>TIUDA=IEN of TEMPLATE record<br/>TIUX(SEQ)=IEN of item<br/>Output:<br/>SUCCESS=IEN of item if successful, or<br/>0^ Explanatory message if not{:/}
 Input parameters | {::nomarkdown}TIUDA<br/>TIUX{:/}
 Code | ```  N FLD,TMP
 S SUCCESS=""
 I (+TIUDA'>0)!($G(TIUX(.01))'="") D  Q:$P(SUCCESS,U,1)="0"
 . I $L($G(TIUX(.01)))<3 D  Q
 . . S SUCCESS="0^Template Field name must be at least 3 characters"
 . S TIUX(.01)=$$UPPER^TIULS(TIUX(.01))
 . N FOUNDIEN
 . S FOUNDIEN=$O(^TIU(8927.1,"B",TIUX(.01),0))
 . I FOUNDIEN>0,FOUNDIEN'=TIUDA D  Q
 . . S SUCCESS="0^"_TIUX(.01)_" is not a unique name"
 . I +TIUDA'>0 D
 . . S TIUDA=$$CREATE($G(TIUX(.01)))
 S SUCCESS=TIUDA Q:'+SUCCESS
 D LOCK^TIUSRVF1(.TMP,TIUDA)
 I TMP=0 D  Q
 . S SUCCESS="0^Template Field currently being edited by another user"
 F FLD=2,10 D
 . I +$O(TIUX(FLD,0)) D  Q:$D(TIUX)'>9
 . . K ^TIU(8927.1,TIUDA,FLD)
 . . I $G(TIUX(FLD,1))="@" K TIUX(FLD) Q
 . . M ^TIU(8927.1,TIUDA,FLD)=TIUX(FLD) K TIUX(FLD)
 . . D SETXT0(TIUDA,FLD)
 I $D(TIUX)>9 D FILE(.SUCCESS,""""_TIUDA_",""",.TIUX)
 D UNLOCK^TIUSRVF1(.TMP,TIUDA)```




 Generated on January 14th 2017, 7:26:35 am