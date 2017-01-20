---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU TEMPLATE LISTOWNR 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU TEMPLATE LISTOWNR{:/}
 tag | {::nomarkdown}LISTOWNR{:/}
 routine | [TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FROM{:/} |  |  |  |  | 
| {::nomarkdown}DIR{:/} |  |  |  |  | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | LISTOWNR^[TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 Method comment | Return subset of personal owners
 Input parameters | {::nomarkdown}TIUFROM<br>DIR{:/}
 Code | {::nomarkdown}  N FILE,IENS,FIELDS,FLAGS,NUMBER,TIUPART,INDEX,SCREEN,ID,TIU,TIUERR<br> S FILE=200,FIELDS="@;.01",FLAGS="PB",INDEX="B",NUMBER=44<br> S (IENS,TIUPART,ID,TIU,TIUERR)=""<br> I DIR=1 S FLAGS="P"<br> S SCREEN="I $O(^TIU(8927,""AROOT"",Y,0))"<br> D LIST^DIC(FILE,IENS,FIELDS,FLAGS,NUMBER,.TIUFROM,.TIUPART,INDEX,SCREEN,ID,"TIU","TIUERR")<br> K TIU("DILIST",0)<br> N DA,I<br> S DA="",I=0<br> F  S DA=$O(TIU("DILIST",DA),DIR) Q:'DA  D<br> . S I=I+1<br> . S TIUY(I)=$G(TIU("DILIST",DA,0)){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [Templates/rTemplates.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:06 am</p>{:/}