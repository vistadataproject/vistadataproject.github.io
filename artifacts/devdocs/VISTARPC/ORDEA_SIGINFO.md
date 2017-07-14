---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORDEA SIGINFO<br/>
# ORDEA SIGINFO

returns the provider/patient info that must be displayed when signing a controlled substance order(s)

## Properties

Property | Value
--- | ---
Label | SIGINFO
Routine | [ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
Return Type | WORD PROCESSING




## MUMPS Method Description

Property | Value
--- | ---
Method | [SIGINFO^ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
Method Comment | returns the provider/patient info that must be displayed when signing controlled substance orders
Input Parameters | ORDFN, ORPROV
Code | {::nomarkdown}<pre><code> N ORI S ORI=0<br/> S ORI=ORI+1,ORY(ORI)=$P(^DPT(+ORDFN,0),U)<br/> S ORI=ORI+1,ORY(ORI)="Date of Issuance: "_$$FMTE^XLFDT($$DT^XLFDT)<br/> S ORI=ORI+1,ORY(ORI)="Provider: "_$$GET1^DIQ(200,ORPROV,.01,"E")<br/> N ORINST<br/> D GETS^DIQ(4,DUZ(2),".01;.02;1.01;1.02;1.03;1.04","E","ORINST")<br/> N ORADDNUM S ORADDNUM=0<br/> I $L(ORINST(4,DUZ(2)_",",1.01,"E"))>0 S ORI=ORI+1,ORY(ORI)=ORINST(4,DUZ(2)_",",1.01,"E"),ORADDNUM=ORADDNUM+1<br/> I $L(ORINST(4,DUZ(2)_",",1.02,"E"))>0 S ORI=ORI+1,ORY(ORI)=ORINST(4,DUZ(2)_",",1.02,"E"),ORADDNUM=ORADDNUM+1<br/> I $L(ORINST(4,DUZ(2)_",",1.03,"E"))>0 S ORI=ORI+1,ORY(ORI)=ORINST(4,DUZ(2)_",",1.03,"E"),ORADDNUM=ORADDNUM+1<br/> I $L(ORINST(4,DUZ(2)_",",.02,"E"))>0 S ORY(ORI)=ORY(ORI)_", "_ORINST(4,DUZ(2)_",",.02,"E"),ORADDNUM=ORADDNUM+1<br/> I $L(ORINST(4,DUZ(2)_",",1.04,"E"))>0 S ORY(ORI)=ORY(ORI)_"  "_ORINST(4,DUZ(2)_",",1.04,"E"),ORADDNUM=ORADDNUM+1<br/> I ORADDNUM=0 D<br/> .S ORI=ORI+1,ORY(ORI)="No Address on record"<br/> .I $L(ORINST(4,DUZ(2)_",",.01,"E"))>0 S ORI=ORI+1,ORY(ORI)="for "_ORINST(4,DUZ(2)_",",.01,"E")<br/> S ORI=ORI+1,ORY(ORI)="DEA: "_$$DEA^XUSER(,ORPROV)<br/> N ORDETOX S ORDETOX=$$DETOX^XUSER(ORPROV)<br/> I $L(ORDETOX)>0 S ORI=ORI+1,ORY(ORI)="Detox: "_ORDETOX</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fReview.pas">fReview.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/fOrdersSign.pas">Orders/fOrdersSign.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}