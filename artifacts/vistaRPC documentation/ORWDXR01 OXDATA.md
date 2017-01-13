---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXR01 OXDATA 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXR01 OXDATA{:/}
 tag | {::nomarkdown}OXDATA{:/}
 routine | [ORWDXR01](http://code.osehra.org/dox/Routine_ORWDXR01_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Return orderable item data for order check usage
 Input Parameters | {::nomarkdown}ORIEN{:/}
 Lines | ```
 Q:'$D(^OR(100,+ORIEN,0))
 D MAYBEIV(.ORY,ORIEN,1) I $L($G(ORY))>1 Q
 N DRUGID,OIID,IDX,IDY,DISPIN,DISPOUT,DISPID
 S (DRUGID,OIID,IDX,IDY,DISPIN,DISPOUT)=0
 S DISPID=""
 S DISPIN=$O(^ORD(100.98,"B","UD RX",0))
 S DISPOUT=$O(^ORD(100.98,"B","O RX",0))
 N DISPCM S DISPCM=$O(^ORD(100.98,"B","CLINIC MEDICATIONS",0))
 N DISPCMIV S DISPCMIV=$O(^ORD(100.98,"B","CLINIC INFUSIONS",0))
 S DRUGID=$O(^OR(100,+ORIEN,4.5,"ID","DRUG",0))
 S OIID=$O(^OR(100,+ORIEN,4.5,"ID","ORDERABLE",0))
 S DISPID=$P(^OR(100,+ORIEN,0),U,11)
 I DISPID=DISPIN S DISPID="PSI"
 I DISPID=DISPOUT S DISPID="PSO"
 I DISPID=DISPCM S DISPID="PSI"
 I DISPID=DISPCMIV S DISPID="PSI"
 I (DISPID'="PSI"),(DISPID'="PSO") Q
 I 'DRUGID,DISPID="PSI" D
 .N ORCHI S ORCHI=0 F  S ORCHI=$O(^OR(100,+ORIEN,2,ORCHI)) Q:'ORCHI  D
 ..N ORCHDRID,ORCHOIID,ORCHIDX,ORCHIDY
 ..S ORCHDRID=$O(^OR(100,+ORCHI,4.5,"ID","DRUG",0))
 ..S ORCHOIID=$O(^OR(100,+ORCHI,4.5,"ID","ORDERABLE",0))
 ..Q:'ORCHDRID
 ..Q:'ORCHOIID
 ..S ORCHIDX=$O(^OR(100,+ORCHI,4.5,ORCHDRID,0))
 ..S ORCHIDY=$O(^OR(100,+ORCHI,4.5,ORCHOIID,0))
 ..I ORCHIDX,ORCHIDY S ORY=$G(^OR(100,+ORCHI,4.5,ORCHOIID,ORCHIDY))_U_DISPID_U_$G(^OR(100,+ORCHI,4.5,ORCHDRID,ORCHIDX))_"|"_$G(ORY)
 Q:'DRUGID
 Q:'OIID
 S IDX=$O(^OR(100,+ORIEN,4.5,DRUGID,0))
 S IDY=$O(^OR(100,+ORIEN,4.5,OIID,0))
 I IDX,IDY,'+DISPID S ORY=$G(^OR(100,+ORIEN,4.5,OIID,IDY))_U_DISPID_U_$G(^OR(100,+ORIEN,4.5,DRUGID,IDX))```




 Generated on January 13th 2017, 6:55:29 am