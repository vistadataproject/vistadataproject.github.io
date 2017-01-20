---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDLR32 ONE SAMPLE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDLR32 ONE SAMPLE{:/}
 tag | {::nomarkdown}ONESAMP{:/}
 routine | [ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns data for one collection sample in the format:     n^SampIEN^SampName^SpecPtr^TubeTop^^^LabCollect^^SpecName{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}COLL SAMP IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} |  | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ONESAMP^[ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html)
 Method comment | Return data for one colelction sample
 Input parameters | {::nomarkdown}IEN{:/}
 First comment | {::nomarkdown}<pre> n^SampIEN^SampName^SpecPtr^TubeTop^^^LabCollect^^SpecName</pre>{:/}
 Code | {::nomarkdown}  N SPC,ILST,X,X0<br> Q:+$G(IEN)=0<br> S ILST=0,LST($$NXT)="~CollSamp"<br> S X0=^LAB(62,IEN,0)<br> S X="i1"_U_IEN_U_$P(X0,U,1)_U_$P(X0,U,2)_U_$P(X0,U,3)_U_U_U_$P(X0,U,7)<br> I $P(X0,U,2) D<br> . S $P(X,U,10)=$P(^LAB(61,+$P(X0,U,2),0),U,1)<br> . S SPC($P(X,U,4))=$P(X,U,10)<br> S LST($$NXT)=X<br> S LST($$NXT)="~Specimens"<br> S SPC=0 F  S SPC=$O(SPC(SPC)) Q:'SPC  S LST($$NXT)=SPC_U_SPC(SPC){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:08 am</p>{:/}