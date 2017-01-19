---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG ANNOT GET IMAGE DETAIL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG ANNOT GET IMAGE DETAIL{:/}
 tag | {::nomarkdown}GETD{:/}
 routine | [MAGSANNO](http://code.osehra.org/dox/Routine_MAGSANNO_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown} Per VHA Directive 2004-038, this should not be modified.+---------------------------------------------------------------+ Property of the US Government.                                 No permission to copy or redistribute this software is given.  Use of unreleased versions of this software requires the user  to execute a written test agreement with the VistA Imaging     Development Office of the Department of Veterans Affairs,      telephone (301) 734-0100.                                      The Food and Drug Administration classifies this software as   a medical device.  As such, it may not be changed in any way.  Modifications to this software may result in an adulterated    medical device under 21CFR820, the use of which is considered  to be a violation of US Federal Statutes.                     +---------------------------------------------------------------+RETURNS THE DETAIL OF IMAGE ANNOTATIONSGETD(MAGOUT,MAGIEN,LAYIEN) ; .MAGOUT       Reference to a local variable where the results are returned to. ; .MAGIEN       Internal entry number of IMAGE file been annotated ; .LAYIEN       Internal entry number of ANNOTATION IMAGE LAYER in #2005.002Return Values=============    If MAGOUT(0) is defined and its 1st '^'-piece is 0, then an erroroccurred during execution of the procedure. 0 ^ 0 ^ error messageMAGOUT(0) = 1 ^ total count  lines counter of the returned arrayMAGOUT(1) = LAYER ID ^ ANNOTATOR ^ SAVED DATE/TIME ^ ANNOTATION VERSION ^ SOURCE ^ DELETION ^ TIU COMPLETION            ^ SERVICE/SECTION  ^ SITE# ^ DUZMAGOUT(n+1) = XML data line(s){:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of IMAGE file been annotated (#2005){:/} | 
| {::nomarkdown}LAYIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} |  | {::nomarkdown}Internal entry number of ANNOTATION IMAGE LAYER in #2005.002 saved layer(s){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}