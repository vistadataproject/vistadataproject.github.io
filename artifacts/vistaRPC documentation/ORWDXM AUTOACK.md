---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXM AUTOACK 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXM AUTOACK{:/}
 tag | {::nomarkdown}AUTOACK{:/}
 routine | [ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Place a quick order in CPRS GUI without the verify step.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Place a quick order without verify step
 Input Parameters | {::nomarkdown}ORVP<br/>ORNP<br/>ORL<br/>ORIT{:/}
 Lines | ```
 N ORDG,ORDUZ,ORSTS,OREVENT,ORCAT,ORDA,ORTS,ORNEW,ORCHECK,ORLOG
 N ORDIALOG,ORIFN,ORLEAD,ORTRAIL
 S ORVP=ORVP_";DPT(",ORL(2)=ORL_";SC(",ORL=ORL(2)
 S DGRP=$P($G(^ORD(101.41,ORIT,0)),U,5) Q:'DGRP
 S ORDIALOG=$$DEFDLG^ORWDXQ(DGRP)
 I ORDIALOG=$O(^ORD(101.41,"B","PSO OERR",0)) S ORCAT="O"      ; temp
 I ORDIALOG=$O(^ORD(101.41,"B","PSJ OR PAT OE",0)) S ORCAT="I" ; temp
 D GETDLG1^ORCD(ORDIALOG)
 D GETORDER^ORCD("^ORD(101.41,"_ORIT_",6)")
 D EN^ORCSAVE
 S REC="" I ORIFN D GETBYIFN^ORWORR(.REC,ORIFN)```




 Generated on January 13th 2017, 6:55:29 am