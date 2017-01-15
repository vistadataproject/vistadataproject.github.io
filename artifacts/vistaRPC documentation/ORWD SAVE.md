---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWD SAVE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWD SAVE{:/}
 tag | {::nomarkdown}SAVE{:/}
 routine | [ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Saves an order.  The order is passed in ORDIALOG format.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | SAVE^[ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
 Method comment | procedure
 First comment | {::nomarkdown}Save order{:/}
 Input parameters | {::nomarkdown}DFN<br>ORNP<br>LOC<br>DLG<br>ORWDACT<br>RSP{:/}
 Code | {::nomarkdown}  N ORDIALOG,ORL,ORVP,ORIFN,ORDUZ,ORSTS,ORDG,OREVENT,ORCAT,ORDA<br> I $P(^ORD(101.41,+DLG,0),U)="PSO OERR" S ORCAT="O"<br> I $P(^ORD(101.41,+DLG,0),U)="PSJ OR PAT OE" S ORCAT="I"<br> S ORVP=DFN_";DPT(",ORL(2)=LOC_";SC(",ORL=ORL(2)<br> D GETDLG^ORCD(DLG)<br> M ORDIALOG=RSP S ORDIALOG=DLG<br> I ORWDACT="N" D<br> . D EN^ORCSAVE<br> . S Y="" I ORIFN D GETBYIFN^ORWORR(.Y,ORIFN)<br> I $P(ORWDACT,U,1)="E" D<br> . S ORIFN=+$P(ORWDACT,U,2) D XX^ORCSAVE<br> . S Y="" S ORIFN=+$P(ORWDACT,U,2)_";"_ORDA D GETBYIFN^ORWORR(.Y,ORIFN){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}