---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ROR UPDATE LOCAL LAB TESTS<br/>
# ROR UPDATE LOCAL LAB TESTS

The ROR UPDATE LOCAL LAB TESTS remote procedure updates the list of localLab test names, which is stored in the LOCAL TEST NAME (28) multiple ofthe ROR REGISTRY PARAMETERS file (#798.1).

## Properties

Property | Value
--- | ---
Label | LTLUPD
Routine | [RORRP031](http://code.osehra.org/dox/Routine_RORRP031_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of the registry parameters record in the ROR REGISTRY PARAMETERS file #798.1).
LTLST | LIST |  | true | The LTLST parameter should be an array containing a list of laboratory test IEN&#x27;s and Lab Group codes. An item of the list should have the following format:   ^01: Ignored  ^02: Ignored  ^03: IEN of the local test (in file #60)  ^04: Code of the Lab Group       (see also the GROUP parameter)  Example:  with RPCBroker.Param[1] do    begin      PType :&#x3D;list;      for i :&#x3D; 1 to Tests.Count do        Mult[i] :&#x3D; &#x27;^^&#x27; + Tests[i-1].TestIEN + &#x27;^&#x27; + Tests[i-1].GroupCode;    end;
GROUP | LITERAL |  | true | If the GROUP parameter is equal to 0 then every item of the LTLST must contain a valid group code. If an empty list is passed into the RPC then ALL records will be deleted from the LOCAL TEST NAME multiple. If this parameter is not zero then it should contain a valid group code.All records of the LTLST will be associated with this group. If an emptylist is passed into the RPC then only records associated with this groupwill be deleted from the multiple.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}