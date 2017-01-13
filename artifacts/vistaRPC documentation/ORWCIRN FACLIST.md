---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWCIRN FACLIST 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWCIRN FACLIST{:/}
 tag | {::nomarkdown}FACLIST{:/}
 routine | [ORWCIRN](http://code.osehra.org/dox/Routine_ORWCIRN_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of the remote VA facilities at which the selected patienthas been seen.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return list of remote facilities for patient
 Input Parameters | {::nomarkdown}ORDFN{:/}
 Lines | ```
 N X,ORSITES,I,IFN,LOCAL,CTR,HDRFLG,GOTNHIN
 S X="MPIF001" X ^%ZOSF("TEST")
 I '$T S ORY(0)="-1^CIRN MPI not installed." Q
 S X="VAFCTFU1" X ^%ZOSF("TEST")
 I '$T S ORY(0)="-1^Remote data view not installed." Q
 S X=$$GET^XPAR("ALL","ORWRP CIRN REMOTE DATA ALLOW",1,"I")
 I 'X S ORY(0)="-1^Remote access not allowed" Q
 D TFL^VAFCTFU1(.ORY,ORDFN)
 S (GOTNHIN,I)=0 F  S I=$O(ORY(I)) Q:'I  I $P(ORY(I),"^",5)="OTHER" D  ;Screen out Type 'OTHER' locations
 . I $P(ORY(I),"^")="200HD" Q  ;HDR
 . I $P(ORY(I),"^")="200NDD" Q  ;DoD Correlated Patients
 . I $E($P(ORY(I),"^"),1,4)="200N",'GOTNHIN S GOTNHIN=1,$P(ORY(I),"^",2)="Non-VA DATA AVAILABLE - use VistAWeb to access" Q  ;NwHIN Master Item
 . K ORY(I)
 S HDRFLG=0
 I $$GET^XPAR("ALL","ORWRP CIRN SITES ALL",1,"I") D
 . S (CTR,I)=0
 . F  S I=$O(ORY(I)) Q:'I  S $P(ORY(I),"^",5)=1,CTR=CTR+1 D
 .. I $P(ORY(I),"^")=200 S $P(ORY(I),"^",2)="DEPT. OF DEFENSE"
 .. I $P(ORY(I),"^")="200HD" D
 ... I +$$GET^XPAR("ALL","ORWRP HDR ON",1,"I")=0 K ORY(I) S CTR=CTR-1 Q
 ... S HDRFLG=I ; Remove commented out code to enable HDR + 1 other site. 
 D GETLST^XPAR(.ORSITES,"ALL","ORWRP CIRN SITES","I")
 S (CTR,I)=0,LOCAL=$P($$SITE^VASITE,"^",3)
 F  S I=$O(ORY(I)) Q:'I  D
 . I +ORY(I)=+LOCAL K ORY(I) Q
 . S IFN=$$IEN^XUAF4(ORY(I)),CTR=CTR+1
 . I IFN,$G(ORSITES(IFN)) S $P(ORY(I),"^",5)=1 D
 .. I $P(ORY(I),"^")=200 S $P(ORY(I),"^",2)="DEPT. OF DEFENSE"
 . I IFN,$G(ORSITES(IFN)),$P(ORY(I),"^")="200HD" D
 .. I +$$GET^XPAR("ALL","ORWRP HDR ON",1,"I")=0 K ORY(I) S CTR=CTR-1 Q
 .. S HDRFLG=I ; Remove commented out code to enable HDR + 1 other site. 
 I '$L($O(ORY(""))) S ORY(0)="-1^Only local data exists for this patient"
 I $G(HDRFLG),CTR'>1 K ORY(HDRFLG) S ORY(0)="-1^Only HDR has data for this patient"```
 Leading comment lines | {::nomarkdown}Check to see if CIRN PD/MPI installed{:/}




 Generated on January 13th 2017, 6:55:29 am