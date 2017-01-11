---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR UPDATE LOCAL LAB TESTS 

 property | value 
--- | --- 
 label | ROR UPDATE LOCAL LAB TESTS
 tag | LTLUPD
 routine | [RORRP031](http://code.osehra.org/dox/Routine_RORRP031_source.html)
 return value type | ARRAY
 description | The ROR UPDATE LOCAL LAB TESTS remote procedure updates the list of localLab test names, which is stored in the LOCAL TEST NAME (28) multiple ofthe ROR REGISTRY PARAMETERS file (#798.1).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of the registry parameters record in the ROR REGISTRY PARAMETERS file #798.1). | 
| LTLST | LIST |  | true | The LTLST parameter should be an array containing a list of laboratory test IEN's and Lab Group codes. An item of the list should have the following format:   ^01: Ignored  ^02: Ignored  ^03: IEN of the local test (in file #60)  ^04: Code of the Lab Group       (see also the GROUP parameter)  Example:  with RPCBroker.Param[1] do    begin      PType :=list;      for i := 1 to Tests.Count do        Mult[i] := '^^' + Tests[i-1].TestIEN + '^' + Tests[i-1].GroupCode;    end; | 
| GROUP | LITERAL |  | true | If the GROUP parameter is equal to 0 then every item of the LTLST must contain a valid group code. If an empty list is passed into the RPC then ALL records will be deleted from the LOCAL TEST NAME multiple. If this parameter is not zero then it should contain a valid group code.All records of the LTLST will be associated with this group. If an emptylist is passed into the RPC then only records associated with this groupwill be deleted from the multiple. | 




Generated on January 11th 2017, 6:34:23 am