---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWOR1 SIG 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWOR1 SIG{:/}
 tag | {::nomarkdown}SIG{:/}
 routine | [ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns 1 if signature gets stored.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Store the signature.
 Input Parameters | {::nomarkdown}ID<br/>X1<br/>X2<br/>X3<br/>X4<br/>ORX5<br/>X6<br/>X7{:/}
 Lines | ```
 N ORHINFO,ORDINFO,OROUT,ORADD
 K ORDFDA
 D HASHINFO^ORDEA(.ORHINFO,X7,X4)
 D ORDHINFO^ORDEA(.ORDINFO,+ID,X1,.ORHINFO)
 S ORADD=1
 I $D(^ORPA(101.52,"B",+ID)) D
 .N ORI S ORI=0 F  S ORI=$O(^ORPA(101.52,"B",+ID,ORI)) Q:'ORI  D
 ..;if existing entry is not one that originated from backdoor and it's hash matches the current hash set flag to not add new record
 ..I ($L($P($G(^ORPA(101.52,ORI,0)),U,2))=0),$P($G(^ORPA(101.52,ORI,0)),U,3)=X1 D
 ...S ORADD=0
 ...;keep record that this was called but matched for 60 days
 ...S ^XTMP("OR DUP ARCHIVE","HMATCH",+ID,ORI,$$NOW^XLFDT)=""
 ...S ^XTMP("OR DUP ARCHIVE",0)=$$FMADD^XLFDT($$NOW^XLFDT,60)_U_$$NOW^XLFDT
 ..;if existing entry is not one that originated from backdoor but it does not match the current hash delete it
 ..I ($L($P($G(^ORPA(101.52,ORI,0)),U,2))=0),$P($G(^ORPA(101.52,ORI,0)),U,3)'=X1 D
 ...;keep deleted archive entry in xtmp for 60 days
 ...M ^XTMP("OR DUP ARCHIVE","HUNMATCH",+ID,ORI,$$NOW^XLFDT)=^ORPA(101.52,ORI)
 ...S ^XTMP("OR DUP ARCHIVE",0)=$$FMADD^XLFDT($$NOW^XLFDT,60)_U_$$NOW^XLFDT
 ...N DA,DIK
 ...S DA=ORI,DIK="^ORPA(101.52," D ^DIK
 ..;if it is from backdoor then update that record with the hash and set flag to not add new record
 ..I $L($P($G(^ORPA(101.52,ORI,0)),U,2))>0 S $P(^ORPA(101.52,ORI,0),U,3)=X1 S ORADD=0
 I ORADD D UPDATE^DIE("","ORDFDA","OROUT","ERROR") K ORDFDA
 S Y1=$$STORESIG^XUSSPKI(X1,X2,.ORX5,X4,X3)
 I +Y1>0 D
 . S ORIFN=+ID,ACT=$P(ID,";",2)
 . S $P(^OR(100,ORIFN,8,+ACT,2),"^",3)=X1
 S RET=1```
 Leading comment lines | {::nomarkdown}ID = orifn;action<br/>X1 = Hash<br/>X2 = Length of the array<br/>X3 = Datafile (100)<br/>X4 = Provider DUZ<br/>ORX5 = Array for the sig<br/>X6 = CRLURL<br/>X7 = DFN{:/}




 Generated on January 13th 2017, 6:55:29 am