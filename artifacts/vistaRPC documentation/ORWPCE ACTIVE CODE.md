---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWPCE ACTIVE CODE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE ACTIVE CODE{:/}
 tag | {::nomarkdown}CODACTIV{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | CODACTIV^[ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 Method comment | Is code active on the given date?
 First comment | {::nomarkdown}Remote procedure:  ORWPCE ACTIVE CODE<br/>ORCODE = ICD or CPT code to be checked<br/>ORAPP  = "ICD", "GMPX" or "CHP"<br/>ORDATE = Date to be checked (defaults to current date){:/}
 Input parameters | {::nomarkdown}ORCODE<br/>ORAPP<br/>ORDATE{:/}
 Code | ```  S:'+$G(ORDATE) ORDATE=DT
 S ORY=1
 I ORAPP="ICD" D  I 1
 . N ORI F ORI=1:1:$L(ORCODE,"/") S ORY=+$$STATCHK^ICDXCODE("DIAGNOSIS",$P(ORCODE,"/",ORI),ORDATE) Q:'ORY
 I ORAPP="GMPX" D  I 1
 . N LEX
 . S ORY=+$$STATCHK^LEXSRC2(ORCODE,ORDATE,.LEX)
 E  I ORAPP="CHP" D
 . S ORY=+$$STATCHK^ICPTAPIU(ORCODE,ORDATE)```




 Generated on January 14th 2017, 7:26:35 am