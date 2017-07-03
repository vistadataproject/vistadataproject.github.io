---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDXR01 OXDATA
# ORWDXR01 OXDATA



Property | Value
--- | ---
Label | OXDATA
Routine | [ORWDXR01](http://code.osehra.org/dox/Routine_ORWDXR01_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [OXDATA^ORWDXR01](http://code.osehra.org/dox/Routine_ORWDXR01_source.html)
Method Comment | Return orderable item data for order check usage
Input Parameters | ORIEN
Code | {::nomarkdown}<pre><code> Q:'$D(^OR(100,+ORIEN,0))<br/> D MAYBEIV(.ORY,ORIEN,1) I $L($G(ORY))>1 Q<br/> N DRUGID,OIID,IDX,IDY,DISPIN,DISPOUT,DISPID<br/> S (DRUGID,OIID,IDX,IDY,DISPIN,DISPOUT)=0<br/> S DISPID=""<br/> S DISPIN=$O(^ORD(100.98,"B","UD RX",0))<br/> S DISPOUT=$O(^ORD(100.98,"B","O RX",0))<br/> N DISPCM S DISPCM=$O(^ORD(100.98,"B","CLINIC MEDICATIONS",0))<br/> N DISPCMIV S DISPCMIV=$O(^ORD(100.98,"B","CLINIC INFUSIONS",0))<br/> S DRUGID=$O(^OR(100,+ORIEN,4.5,"ID","DRUG",0))<br/> S OIID=$O(^OR(100,+ORIEN,4.5,"ID","ORDERABLE",0))<br/> S DISPID=$P(^OR(100,+ORIEN,0),U,11)<br/> I DISPID=DISPIN S DISPID="PSI"<br/> I DISPID=DISPOUT S DISPID="PSO"<br/> I DISPID=DISPCM S DISPID="PSI"<br/> I DISPID=DISPCMIV S DISPID="PSI"<br/> I (DISPID'="PSI"),(DISPID'="PSO") Q<br/> I 'DRUGID,DISPID="PSI" D<br/> .N ORCHI S ORCHI=0 F  S ORCHI=$O(^OR(100,+ORIEN,2,ORCHI)) Q:'ORCHI  D<br/> ..N ORCHDRID,ORCHOIID,ORCHIDX,ORCHIDY<br/> ..S ORCHDRID=$O(^OR(100,+ORCHI,4.5,"ID","DRUG",0))<br/> ..S ORCHOIID=$O(^OR(100,+ORCHI,4.5,"ID","ORDERABLE",0))<br/> ..Q:'ORCHDRID<br/> ..Q:'ORCHOIID<br/> ..S ORCHIDX=$O(^OR(100,+ORCHI,4.5,ORCHDRID,0))<br/> ..S ORCHIDY=$O(^OR(100,+ORCHI,4.5,ORCHOIID,0))<br/> ..I ORCHIDX,ORCHIDY S ORY=$G(^OR(100,+ORCHI,4.5,ORCHOIID,ORCHIDY))_U_DISPID_U_$G(^OR(100,+ORCHI,4.5,ORCHDRID,ORCHIDX))_"/"_$G(ORY)<br/> Q:'DRUGID<br/> Q:'OIID<br/> S IDX=$O(^OR(100,+ORIEN,4.5,DRUGID,0))<br/> S IDY=$O(^OR(100,+ORIEN,4.5,OIID,0))<br/> I IDX,IDY,'+DISPID S ORY=$G(^OR(100,+ORIEN,4.5,OIID,IDY))_U_DISPID_U_$G(^OR(100,+ORIEN,4.5,DRUGID,IDX))</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}