---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORPRF HASFLG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORPRF HASFLG{:/}
 tag | {::nomarkdown}HASFLG{:/}
 routine | [ORPRF](http://code.osehra.org/dox/Routine_ORPRF_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | HASFLG^[ORPRF](http://code.osehra.org/dox/Routine_ORPRF_source.html)
 Method comment | Does patient PTDFN has flags
 First comment | {::nomarkdown}<pre>     DBIA 3860: $$GETACT^DGPFAPI(PTDFN,.FLGDATA)<br/> Returns array ORY listing active assigned flags<br/> Array ORY has form:<br/>   ORY(flagID) = flagID^flagname,CAT1<br/>      where CAT1 is 1 if flag is cat 1, 0 if cat 2<br/> ORY = Num of items returned in array ORY = num of flags</pre>{:/}
 Input parameters | {::nomarkdown}PTDFN{:/}
 Code | {::nomarkdown}  I '$L($TEXT(GETACT^DGPFAPI)) S ORY=0 Q<br> N IDY,PRFARR,CAT1<br> K ^TMP("ORPRF",$J)<br> S ORY=$$GETACT^DGPFAPI(PTDFN,"PRFARR")<br> Q:'ORY<br> D FMT(.@("PRFARR")) ; Sets ^TMP("ORPRF"<br> S IDY=0 F  S IDY=$O(^TMP("ORPRF",$J,IDY)) Q:'IDY  D<br> . S ORY(IDY)=IDY_U_$G(^TMP("ORPRF",$J,IDY,"FLAG"))<br> . S CAT1=0<br> . I $G(^TMP("ORPRF",$J,IDY,"CATEGORY"))="I (NATIONAL)" S CAT1=1<br> . S ORY(IDY)=ORY(IDY)_U_CAT1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/uOrPtf.pas">uOrPtf.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}