---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP COLUMN HEADERS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP COLUMN HEADERS{:/}
 tag | {::nomarkdown}GETCOL{:/}
 routine | [ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Get list of Column headers for a ListView type report from file 101.24.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETCOL^[ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html)
 Method comment | get Column headers for ListView
 Input parameters | {::nomarkdown}IFN{:/}
 Code | {::nomarkdown}  N I,J,X,VAL<br> Q:'$G(IFN)<br> S I=0,ROOT=$NA(ROOT)<br> F  S I=$O(^ORD(101.24,IFN,3,"C",I)) Q:'I  D<br> . S VAL=$$GET^XPAR(DUZ_";VA(200,","ORWCH COLUMNS REPORTS",IFN,"I"),J=0<br> . F  S J=$O(^ORD(101.24,IFN,3,"C",I,J)) Q:'J  I $D(^ORD(101.24,IFN,3,J)) S X=^(J,0) D<br> .. I $L(VAL),$P(VAL,",",I) S $P(X,"^",10)=$P(VAL,",",I)<br> .. D SETITEM(.ROOT,X){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [rReports.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}