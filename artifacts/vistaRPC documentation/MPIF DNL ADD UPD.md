---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MPIF DNL ADD UPD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MPIF DNL ADD UPD{:/}
 tag | {::nomarkdown}DNLADD{:/}
 routine | [MPIRPC](http://code.osehra.org/dox/Routine_MPIRPC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC has been established to allow the remote creation of records into the MPI DO NOT LINK (#985.26) file.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SOURCEID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The field is the ID of the record you want to add to the DO NOT LINK list.The field format will be the fully qualified SourceID:  SourceID~AssigningLocation~AssigningAuthority~SourceType For example: 123~500~USVHA~PI{:/} | 
| {::nomarkdown}DNLSOURCEID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The field contains the corresponding ID of the record you want to add tothe DO NOT LINK list.  The field format will be the fully qualifiedSourceID: SourceID~AssigningLocation~AssigningAuthority~SourceType  For example: 123~500~USVHA~PI{:/} | 
| {::nomarkdown}DNLIDENTIFIEDBY{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the person that identified the DO NOT LINK record.{:/} | 
| {::nomarkdown}DNLEVENT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the event that triggered this entry to get created.  The events are MPI Resolve Mismatch, User input, TOOLKIT Resolve Duplicate, andKERNEL VERIFIED NOT A DUPLICATE.{:/} | 
| {::nomarkdown}DNLSOURCEID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The field contains the corresponding ID of the record you want to add tothe DO NOT LINK list.  The field format will be the fully qualifiedSourceID:SourceID~AssigningLocation~AssigningAuthority~SourceType For example: 123~500~USVHA~PI{:/} | 
| {::nomarkdown}INACT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} |  | {::nomarkdown}This field will be used to pass whether the user/application wants the pair to be inactivated.  If you want the pair to be inactivated pass a Yfor yes, otherwise leave blank.{:/} | 
| {::nomarkdown}DNLIDENTIFIEDBY{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the person that identified the DO NOT LINK record.{:/} | 
| {::nomarkdown}DNLEVENT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the event that triggered this entry to get created.  The events are MPI Resolve Mismatch, User input, TOOLKIT Resolve Duplicate, and KERNEL VERIFIED NOT A DUPLICATE.{:/} | 
| {::nomarkdown}DNLIDENTIFYINGLOCATION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This field contains the station# of the person that identified/triggered the DO NOT LINK request to be added.{:/} | 
| {::nomarkdown}INACT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} |  | {::nomarkdown}This field will be used to pass whether the user/application wants the pairto be inactivated.  If you want the pair to be inactivated pass a Y foryes, otherwise leave blank.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}