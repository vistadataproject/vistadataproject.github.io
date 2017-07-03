---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWOR1 SIG
# ORWOR1 SIG

Returns 1 if signature gets stored.

Property | Value
--- | ---
Label | SIG
Routine | [ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [SIG^ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html)
Method Comment | Store the signature.
Input Parameters | ID, X1, X2, X3, X4, ORX5, X6, X7
First Comment | {::nomarkdown}<pre><code>ID = orifn;action<br/>X1 = Hash<br/>X2 = Length of the array<br/>X3 = Datafile (100)<br/>X4 = Provider DUZ<br/>ORX5 = Array for the sig<br/>X6 = CRLURL<br/>X7 = DFN<br/></code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ORHINFO,ORDINFO,OROUT,ORADD<br/> K ORDFDA<br/> D HASHINFO^ORDEA(.ORHINFO,X7,X4)<br/> D ORDHINFO^ORDEA(.ORDINFO,+ID,X1,.ORHINFO)<br/> S ORADD=1<br/> I $D(^ORPA(101.52,"B",+ID)) D<br/> .N ORI S ORI=0 F  S ORI=$O(^ORPA(101.52,"B",+ID,ORI)) Q:'ORI  D<br/> ..;if existing entry is not one that originated from backdoor and it's hash matches the current hash set flag to not add new record<br/> ..I ($L($P($G(^ORPA(101.52,ORI,0)),U,2))=0),$P($G(^ORPA(101.52,ORI,0)),U,3)=X1 D<br/> ...S ORADD=0<br/> ...;keep record that this was called but matched for 60 days<br/> ...S ^XTMP("OR DUP ARCHIVE","HMATCH",+ID,ORI,$$NOW^XLFDT)=""<br/> ...S ^XTMP("OR DUP ARCHIVE",0)=$$FMADD^XLFDT($$NOW^XLFDT,60)_U_$$NOW^XLFDT<br/> ..;if existing entry is not one that originated from backdoor but it does not match the current hash delete it<br/> ..I ($L($P($G(^ORPA(101.52,ORI,0)),U,2))=0),$P($G(^ORPA(101.52,ORI,0)),U,3)'=X1 D<br/> ...;keep deleted archive entry in xtmp for 60 days<br/> ...M ^XTMP("OR DUP ARCHIVE","HUNMATCH",+ID,ORI,$$NOW^XLFDT)=^ORPA(101.52,ORI)<br/> ...S ^XTMP("OR DUP ARCHIVE",0)=$$FMADD^XLFDT($$NOW^XLFDT,60)_U_$$NOW^XLFDT<br/> ...N DA,DIK<br/> ...S DA=ORI,DIK="^ORPA(101.52," D ^DIK<br/> ..;if it is from backdoor then update that record with the hash and set flag to not add new record<br/> ..I $L($P($G(^ORPA(101.52,ORI,0)),U,2))>0 S $P(^ORPA(101.52,ORI,0),U,3)=X1 S ORADD=0<br/> I ORADD D UPDATE^DIE("","ORDFDA","OROUT","ERROR") K ORDFDA<br/> S Y1=$$STORESIG^XUSSPKI(X1,X2,.ORX5,X4,X3)<br/> I +Y1>0 D<br/> . S ORIFN=+ID,ACT=$P(ID,";",2)<br/> . S $P(^OR(100,ORIFN,8,+ACT,2),"^",3)=X1<br/> S RET=1</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}