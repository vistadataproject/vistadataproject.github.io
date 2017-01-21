---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE MHTESTOK 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE MHTESTOK{:/}
 tag | {::nomarkdown}MHTESTOK{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns TRUE if all supporing code is in place for Mental Health Tests.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | MHTESTOK^[ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 Method comment | Returns True if all supporting MH Test APIs exist
 Code | {::nomarkdown}  D GAFOK(.ORY)<br> I +ORY,+$G(DUZ),$T(SAVEIT^YTAPI1)'="",$T(PREVIEW^YTAPI4)'="",$T(SHOWALL^YTAPI3)'="",$T(LISTONE^YTAPI)'="",$T(MHS^PXRMRPCC)'="",$T(MHR^PXRMRPCC)'="",$T(MH^PXRMRPCC)'="" D<br> . N SRV<br> . S SRV=$P($G(^VA(200,DUZ,5)),U)<br> . S ORY=$$GET^XPAR(DUZ_";VA(200,^SRV.`"_+$G(SRV)_"^DIV^SYS","PXRM MENTAL HEALTH ACTIVE",1,"Q")<br> . I +ORY S ORY=1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:52 am</p>{:/}