---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; OR PRINT ALL ORDERS CHART SUM<br/>
# OR PRINT ALL ORDERS CHART SUM

A value of 1 in this parameter will print all orders on the 24 Hourchart summary report options. A value of 0 will only print orders that originally printed a  chartcopy.  This is the default value for this parameter.  Some sites havehad problems with this value, because the Chart Copy Summary may bedifferent from the Order Summary report, which prints all orders.Some orders don&#x27;t print a chart copy automatically, because of thenature of order the order was given when entered, or because the locationfrom which the order was entered, may not have been setup for printing. A value of 2 will look at the Nature of Order file to determine if theorder should print on the summary report.

## Properties

Property | Value
--- | ---
Summary | Print All orders on Chart Summary
Value Type | set of codes
Value Domain | 0:PREVIOUSLY PRINTED;1:ALL;2:DEPENDS ON NATURE OF ORDER
Multiple Instances | false

## Allowable Entities

Precedence | Entity
--- | ---
1 | SYSTEM

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:40 pm</p>{:/}