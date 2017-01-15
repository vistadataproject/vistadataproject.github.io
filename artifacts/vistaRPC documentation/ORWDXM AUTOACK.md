---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXM AUTOACK 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXM AUTOACK{:/}
 tag | {::nomarkdown}AUTOACK{:/}
 routine | [ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Place a quick order in CPRS GUI without the verify step.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | AUTOACK^[ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html)
 Method comment | Place a quick order without verify step
 Input parameters | {::nomarkdown}ORVP<br>ORNP<br>ORL<br>ORIT{:/}
 Code | {::nomarkdown}  N ORDG,ORDUZ,ORSTS,OREVENT,ORCAT,ORDA,ORTS,ORNEW,ORCHECK,ORLOG<br> N ORDIALOG,ORIFN,ORLEAD,ORTRAIL<br> S ORVP=ORVP_";DPT(",ORL(2)=ORL_";SC(",ORL=ORL(2)<br> S DGRP=$P($G(^ORD(101.41,ORIT,0)),U,5) Q:'DGRP<br> S ORDIALOG=$$DEFDLG^ORWDXQ(DGRP)<br> I ORDIALOG=$O(^ORD(101.41,"B","PSO OERR",0)) S ORCAT="O"      ; temp<br> I ORDIALOG=$O(^ORD(101.41,"B","PSJ OR PAT OE",0)) S ORCAT="I" ; temp<br> D GETDLG1^ORCD(ORDIALOG)<br> D GETORDER^ORCD("^ORD(101.41,"_ORIT_",6)")<br> D EN^ORCSAVE<br> S REC="" I ORIFN D GETBYIFN^ORWORR(.REC,ORIFN){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}