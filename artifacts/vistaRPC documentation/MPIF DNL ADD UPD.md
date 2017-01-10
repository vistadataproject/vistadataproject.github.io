---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MPIF DNL ADD UPD 

 property | value 
--- | --- 
 label | MPIF DNL ADD UPD
 tag | DNLADD
 routine | [MPIRPC](http://code.osehra.org/dox/Routine_MPIRPC_source.html)
 return value type | ARRAY
 description | This RPC has been established to allow the remote creation of records into the MPI DO NOT LINK (#985.26) file.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | SOURCEID | LITERAL | 50 | true | The field is the ID of the record you want to add to the DO NOT LINK list.The field format will be the fully qualified SourceID:  SourceID~AssigningLocation~AssigningAuthority~SourceType For example: 123~500~USVHA~PI | 
| vs:Input_Parameter-8994_02 | DNLSOURCEID | LITERAL | 50 | true | The field contains the corresponding ID of the record you want to add tothe DO NOT LINK list.  The field format will be the fully qualifiedSourceID: SourceID~AssigningLocation~AssigningAuthority~SourceType  For example: 123~500~USVHA~PI | 
| vs:Input_Parameter-8994_02 | DNLIDENTIFIEDBY | LITERAL | 60 | true | This is the person that identified the DO NOT LINK record. | 
| vs:Input_Parameter-8994_02 | DNLEVENT | LITERAL | 30 | true | This is the event that triggered this entry to get created.  The events are MPI Resolve Mismatch, User input, TOOLKIT Resolve Duplicate, andKERNEL VERIFIED NOT A DUPLICATE. | 
| vs:Input_Parameter-8994_02 | DNLSOURCEID | LITERAL | 50 | true | The field contains the corresponding ID of the record you want to add tothe DO NOT LINK list.  The field format will be the fully qualifiedSourceID:SourceID~AssigningLocation~AssigningAuthority~SourceType For example: 123~500~USVHA~PI | 
| vs:Input_Parameter-8994_02 | INACT | LITERAL | 1 |  | This field will be used to pass whether the user/application wants the pair to be inactivated.  If you want the pair to be inactivated pass a Yfor yes, otherwise leave blank. | 
| vs:Input_Parameter-8994_02 | DNLIDENTIFIEDBY | LITERAL | 60 | true | This is the person that identified the DO NOT LINK record. | 
| vs:Input_Parameter-8994_02 | DNLEVENT | LITERAL | 30 | true | This is the event that triggered this entry to get created.  The events are MPI Resolve Mismatch, User input, TOOLKIT Resolve Duplicate, and KERNEL VERIFIED NOT A DUPLICATE. | 
| vs:Input_Parameter-8994_02 | DNLIDENTIFYINGLOCATION | LITERAL | 5 | true | This field contains the station# of the person that identified/triggered the DO NOT LINK request to be added. | 
| vs:Input_Parameter-8994_02 | INACT | LITERAL | 1 |  | This field will be used to pass whether the user/application wants the pairto be inactivated.  If you want the pair to be inactivated pass a Y foryes, otherwise leave blank. | 