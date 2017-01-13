---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE ACTIVE CODE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE ACTIVE CODE{:/}
 tag | {::nomarkdown}CODACTIV{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Is code active on the given date?
 Input Parameters | {::nomarkdown}ORCODE<br/>ORAPP<br/>ORDATE{:/}
 Lines | ```
 S:'+$G(ORDATE) ORDATE=DT
 S ORY=1
 I ORAPP="ICD" D  I 1
 . N ORI F ORI=1:1:$L(ORCODE,"/") S ORY=+$$STATCHK^ICDXCODE("DIAGNOSIS",$P(ORCODE,"/",ORI),ORDATE) Q:'ORY
 I ORAPP="GMPX" D  I 1
 . N LEX
 . S ORY=+$$STATCHK^LEXSRC2(ORCODE,ORDATE,.LEX)
 E  I ORAPP="CHP" D
 . S ORY=+$$STATCHK^ICPTAPIU(ORCODE,ORDATE)```
 Leading comment lines | {::nomarkdown}Remote procedure:  ORWPCE ACTIVE CODE<br/>ORCODE = ICD or CPT code to be checked<br/>ORAPP  = "ICD", "GMPX" or "CHP"<br/>ORDATE = Date to be checked (defaults to current date){:/}




 Generated on January 13th 2017, 6:55:29 am