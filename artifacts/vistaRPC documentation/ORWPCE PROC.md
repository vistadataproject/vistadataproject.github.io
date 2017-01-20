---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE PROC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE PROC{:/}
 tag | {::nomarkdown}PROC{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of procedures for a clinic location.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | PROC^[ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 Method comment | get list of procedures for clinic P12 for CPTMods
 Input parameters | {::nomarkdown}CLINIC, ORDATE{:/}
 Code | {::nomarkdown}  S:'+$G(ORDATE) ORDATE=DT<br> D GETLST^IBDF18A(CLINIC,"DG SELECT CPT PROCEDURE CODES","LST",,,1,ORDATE)<br> N IDX,MOD,CODES,FIRST S IDX=0<br> F  S IDX=$O(LST(IDX)) Q:'+IDX  D<br> . I LST(IDX)="" K LST(IDX) Q<br> . S MOD=0,CODES="",FIRST=1<br> . F  S MOD=$O(LST(IDX,"MODIFIER",MOD)) Q:(MOD="")  D<br> . . I FIRST S FIRST=0<br> . . E  S CODES=CODES_";"<br> . . S CODES=CODES_LST(IDX,"MODIFIER",MOD)<br> . K LST(IDX,"MODIFIER")<br> . I 'FIRST S $P(LST(IDX),U,12)=CODES{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}