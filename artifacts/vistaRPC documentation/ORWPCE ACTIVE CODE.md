---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE ACTIVE CODE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE ACTIVE CODE{:/}
 tag | {::nomarkdown}CODACTIV{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | CODACTIV^[ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 Method comment | Is code active on the given date?
 Input parameters | {::nomarkdown}ORCODE, ORAPP, ORDATE{:/}
 First comment | {::nomarkdown}<pre> Remote procedure:  ORWPCE ACTIVE CODE<br/> ORCODE = ICD or CPT code to be checked<br/> ORAPP  = "ICD", "GMPX" or "CHP"<br/> ORDATE = Date to be checked (defaults to current date)</pre>{:/}
 Code | {::nomarkdown}  S:'+$G(ORDATE) ORDATE=DT<br> S ORY=1<br> I ORAPP="ICD" D  I 1<br> . N ORI F ORI=1:1:$L(ORCODE,"/") S ORY=+$$STATCHK^ICDXCODE("DIAGNOSIS",$P(ORCODE,"/",ORI),ORDATE) Q:'ORY<br> I ORAPP="GMPX" D  I 1<br> . N LEX<br> . S ORY=+$$STATCHK^LEXSRC2(ORCODE,ORDATE,.LEX)<br> E  I ORAPP="CHP" D<br> . S ORY=+$$STATCHK^ICPTAPIU(ORCODE,ORDATE){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/BA/UBACore.pas">BA/UBACore.pas</a><br/> <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}