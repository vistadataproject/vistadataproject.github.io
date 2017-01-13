---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDLR32 ONE SAMPLE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDLR32 ONE SAMPLE{:/}
 tag | {::nomarkdown}ONESAMP{:/}
 routine | [ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns data for one collection sample in the format:     n^SampIEN^SampName^SpecPtr^TubeTop^^^LabCollect^^SpecName{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return data for one colelction sample
 Input Parameters | {::nomarkdown}IEN{:/}
 Lines | ```
 N SPC,ILST,X,X0
 Q:+$G(IEN)=0
 S ILST=0,LST($$NXT)="~CollSamp"
 S X0=^LAB(62,IEN,0)
 S X="i1"_U_IEN_U_$P(X0,U,1)_U_$P(X0,U,2)_U_$P(X0,U,3)_U_U_U_$P(X0,U,7)
 I $P(X0,U,2) D
 . S $P(X,U,10)=$P(^LAB(61,+$P(X0,U,2),0),U,1)
 . S SPC($P(X,U,4))=$P(X,U,10)
 S LST($$NXT)=X
 S LST($$NXT)="~Specimens"
 S SPC=0 F  S SPC=$O(SPC(SPC)) Q:'SPC  S LST($$NXT)=SPC_U_SPC(SPC)```
 Leading comment lines | {::nomarkdown}n^SampIEN^SampName^SpecPtr^TubeTop^^^LabCollect^^SpecName{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}COLL SAMP IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 6:55:29 am