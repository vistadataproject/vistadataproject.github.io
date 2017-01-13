---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWD SAVE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWD SAVE{:/}
 tag | {::nomarkdown}SAVE{:/}
 routine | [ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Saves an order.  The order is passed in ORDIALOG format.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | procedure
 Input Parameters | {::nomarkdown}DFN<br/>ORNP<br/>LOC<br/>DLG<br/>ORWDACT<br/>RSP{:/}
 Lines | ```
 N ORDIALOG,ORL,ORVP,ORIFN,ORDUZ,ORSTS,ORDG,OREVENT,ORCAT,ORDA
 I $P(^ORD(101.41,+DLG,0),U)="PSO OERR" S ORCAT="O"
 I $P(^ORD(101.41,+DLG,0),U)="PSJ OR PAT OE" S ORCAT="I"
 S ORVP=DFN_";DPT(",ORL(2)=LOC_";SC(",ORL=ORL(2)
 D GETDLG^ORCD(DLG)
 M ORDIALOG=RSP S ORDIALOG=DLG
 I ORWDACT="N" D
 . D EN^ORCSAVE
 . S Y="" I ORIFN D GETBYIFN^ORWORR(.Y,ORIFN)
 I $P(ORWDACT,U,1)="E" D
 . S ORIFN=+$P(ORWDACT,U,2) D XX^ORCSAVE
 . S Y="" S ORIFN=+$P(ORWDACT,U,2)_";"_ORDA D GETBYIFN^ORWORR(.Y,ORIFN)```
 Leading comment lines | {::nomarkdown}Save order{:/}




 Generated on January 13th 2017, 6:55:28 am