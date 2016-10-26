/**
 * Created by cshampur on 10/10/16.
 */

import {Component, Input, Output, OnInit, EventEmitter, OnChanges} from "@angular/core";
import {isUndefined} from "util";
var _ = require('lodash');

interface Chunk{
    selected: boolean;
    pageNo: number;
}

interface Table {
    chunks: Chunk[];
    pageNo: number;
    tableSize: number;
    searchText: string;
}

interface SortObj {
    field: string;
    reverse: boolean;
    iconDirection: Object;
}

@Component({
    selector: 'ctv-table',
    templateUrl: 'components/directives/table.html'

})

export class CtvTableComponent implements OnChanges, OnInit {

    public table:Table;
    @Input('items') items: Object[];
    @Input('size') size:number;
    @Output('filtereditems') filteredinputitems: EventEmitter<any>;
    @Input('defaultSortColumn') defaultSortColumn: string;
    public pageChunks:Chunk[];
    public sortObj: SortObj

    constructor(){
        debugger;
        this.filteredinputitems = new EventEmitter<any>();
        this.table = {chunks:[], pageNo: 0, tableSize: 12, searchText:''};
        this.pageChunks = [];
        this.defaultSortColumn='';
        this.size=12;
        this.items=[];
        this.sortObj = this.initializeSort(this.defaultSortColumn);
    }

    ngOnInit(){
        if(isNaN(this.size))
            this.size = 12;
        this.table.tableSize = this.size;
        this.sortObj = this.initializeSort(this.defaultSortColumn);
        this.showChunk(this.table.pageNo, this.table.searchText);
    }

    ngOnChanges(){
        debugger;
        this.showChunk(this.table.pageNo, this.table.searchText);
    }


    public showChunk(pageNo: number, searchText: string): boolean{
        debugger;
        this.table.searchText = searchText;

        if(isUndefined(pageNo) || pageNo < 0){
            pageNo=0;
        }

        this.table.pageNo = pageNo;

        if(!(isUndefined(this.items))){
            var searchTextFilteredItems = this.filterItems(searchText);
            var sortedItems = this.sort(searchTextFilteredItems);
            var noOfChunks = Math.ceil(sortedItems.length / this.table.tableSize);
            if(noOfChunks == 0 ){
                noOfChunks=1;
            }

            this.table.chunks = [];

            for(var i=0; i< noOfChunks; i++){
                this.table.chunks.push({selected: false, pageNo: i});
            }

            if( pageNo >= this.table.chunks.length){
                this.table.pageNo = 0;
            }

            this.table.chunks[this.table.pageNo]['selected'] = true;

            if(this.table.chunks.length > 5){
                var sliceStart, sliceEnd;
                sliceStart = this.table.pageNo - 2;
                sliceEnd = this.table.pageNo + 3;
                if(sliceStart < 0 ){
                    sliceEnd = sliceEnd = sliceStart;
                    sliceStart = 0;
                }
                if(sliceEnd > this.table.chunks.length){
                    sliceStart = sliceStart = (sliceEnd = this.table.chunks.length);
                    sliceEnd = this.table.chunks.length;
                }
                this.pageChunks = this.table.chunks.slice(sliceStart,sliceEnd);
            }
            else{
                this.pageChunks = this.table.chunks;
            }
            var filtitems = this.limitItems(this.table.tableSize, this.table.pageNo * this.table.tableSize, sortedItems);
            this.filteredinputitems.emit(filtitems);

        }
        return false;
    }

    public showPrevChunk(): any {
        var prevChunk;
        if(this.table.pageNo <=0 ) {
            prevChunk = 0;
        } else {
            prevChunk = this.table.pageNo - 1;
        }
        return this.showChunk(prevChunk, this.table.searchText);
    }

    public showNextChunk(): any {
        var nextChunk;

        nextChunk = this.table.pageNo + 1;
        if(nextChunk > this.table.chunks.length -1 ){
            nextChunk = this.table.chunks.length - 1;
        }

        return this.showChunk(nextChunk, this.table.searchText);
    }

    private filterItems(searchText: string): Object[]{
        var selectedItems = [];
        if(searchText.length === 0){
            return this.items;
        }
        for(var item of this.items){
            var str = JSON.stringify(item);
            if (str.search(searchText) > -1){
                selectedItems.push(item);
            }
        }
        return selectedItems;
    }

    private limitItems(limitSize: number, start: number, items: Object[]): Object[]{
        var selectedItems = [];

        for(var i=start; (i<items.length) && (i<(start + limitSize)); i++){
            selectedItems.push(items[i]);
        }
        return selectedItems;
    }

    private initializeSort(sortfield: string): SortObj{
        return {
            field: sortfield,
            reverse: false,
            iconDirection: {"down": true, "up": false}
        }
    }

    public applysort(sortfield: string){
        if(sortfield == this.sortObj.field){
            this.sortObj.field = sortfield;
            this.sortObj.reverse = !this.sortObj.reverse;
            this.sortObj.iconDirection = {
                "down": !(this.sortObj.reverse),
                "up": this.sortObj.reverse
            }
        } else {
            this.sortObj = this.initializeSort(sortfield);
        }
        this.showChunk(this.table.pageNo, this.table.searchText);
    }

    private sort(items: Object[]): Object[]{
        var sortedItems: Object[];
        if(this.sortObj.field=='') return items;
        sortedItems = _.sortBy(items,[this.sortObj.field]);
        if(this.sortObj.reverse)
            sortedItems = _.reverse(sortedItems);
        return sortedItems;
    }
}

@Component({
    selector: "ctv-th",
    templateUrl: 'components/directives/tableheader.html'
})

export class CtvThComponent{
    @Input('sortfield') sortfield: string;
    @Output('sortdata') sortdata: EventEmitter<any>;
    @Input('sortobject') sortobject: SortObj;
    constructor(){
        debugger
        this.sortdata = new EventEmitter<any>();
        this.sortfield = '';
    }

    sortColumn(){
        debugger;
        this.sortdata.emit(this.sortfield);
    }
}

@Component({
    selector: "ctv-tpagination",
    templateUrl:'components/directives/paginationmenu.html'
})

export class CtvTpaginationComponent{

    @Input('chunks') chunks: Chunk[];
    @Output('showPage') showPage: EventEmitter<any>;
    @Output('prevChunk') prevChunk: EventEmitter<any>;
    @Output('nextChunk') nextChunk: EventEmitter<any>;

    constructor(){
        debugger;
        this.chunks = [];
        this.showPage = new EventEmitter<any>();
        this.prevChunk = new EventEmitter<any>();
        this.nextChunk = new EventEmitter<any>()
    }

    public showPrevChunk(){
        this.prevChunk.emit();
    }

    public showNextChunk(){
        this.nextChunk.emit();
    }

    public showClickedPage(pageNo: number){
        this.showPage.emit(pageNo);
    }

}

@Component({
    selector: 'ctv-search',
    templateUrl: 'components/directives/searchinput.html'
})

export class CtvSearchComponent{

    public searchText: string;
    @Input('placeholder') placeholder: string;
    @Output('searchTextChange') searchTextChange: EventEmitter<any> = new EventEmitter<any>();
    public size:number;

    constructor(){
        debugger;
        this.searchText = '';
        this.size = 30;
        this.placeholder = 'Search';
    }

    public showChunk(event: any){
        debugger;
        this.searchTextChange.emit(event);
    }
}