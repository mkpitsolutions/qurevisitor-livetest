import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@components/components/ui/table';
import { Input } from '@components/components/ui/input';
import { Button } from '@components/components/ui/button';
import { ChevronLeft, ChevronRight, Search, ChevronsLeft, ChevronsRight } from 'lucide-react';

export default function VisitorHistory() {
  // Generate 30 dummy visitor entries
  const generateDummyVisitors = () => {
    const dummyVisitors = [];
    const statuses = ['checked-in', 'checked-out'];
    const purposes = ['Meeting', 'Interview', 'Delivery', 'Appointment', 'Maintenance'];
    const hosts = ['Sarah Smith', 'Mike Johnson', 'Lisa Wilson', 'David Brown', 'Emily Davis'];
    
    for (let i = 1; i <= 30; i++) {
      const checkInDate = new Date();
      checkInDate.setDate(checkInDate.getDate() - Math.floor(Math.random() * 30));
      const checkOutDate = new Date(checkInDate);
      checkOutDate.setHours(checkInDate.getHours() + Math.floor(Math.random() * 5) + 1);
      
      dummyVisitors.push({
        id: i.toString(),
        name: `Visitor ${i}`,
        email: `visitor${i}@example.com`,
        phone: `555-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(1000 + Math.random() * 9000)}`,
        purpose: purposes[Math.floor(Math.random() * purposes.length)],
        checkIn: checkInDate.toLocaleString('en-US', {
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        checkOut: Math.random() > 0.3 ? checkOutDate.toLocaleString('en-US', {
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }) : null,
        host: hosts[Math.floor(Math.random() * hosts.length)],
        status: statuses[Math.floor(Math.random() * statuses.length)]
      });
    }
    return dummyVisitors;
  };

  const [visitors] = useState(generateDummyVisitors());
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const visitorsPerPage = 10;

  // Filter visitors based on search term
  const filteredVisitors = visitors.filter(visitor => {
    const searchLower = searchTerm.toLowerCase();
    return (
      visitor.name.toLowerCase().includes(searchLower) ||
      visitor.email.toLowerCase().includes(searchLower) ||
      visitor.phone.includes(searchTerm) ||
      visitor.host.toLowerCase().includes(searchLower) ||
      visitor.purpose.toLowerCase().includes(searchLower)
    );
  });

  // Get current visitors for pagination
  const indexOfLastVisitor = currentPage * visitorsPerPage;
  const indexOfFirstVisitor = indexOfLastVisitor - visitorsPerPage;
  const currentVisitors = filteredVisitors.slice(indexOfFirstVisitor, indexOfLastVisitor);
  const totalPages = Math.ceil(filteredVisitors.length / visitorsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Visitor History</h1>
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search visitors..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to first page when searching
            }}
          />
        </div>
      </div>

      <div className="rounded-md border mb-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Visitor Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Purpose</TableHead>
              <TableHead>Check In</TableHead>
              <TableHead>Check Out</TableHead>
              <TableHead>Host</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentVisitors.length > 0 ? (
              currentVisitors.map((visitor) => (
                <TableRow key={visitor.id}>
                  <TableCell className="font-medium">{visitor.name}</TableCell>
                  <TableCell>{visitor.email}</TableCell>
                  <TableCell>{visitor.phone}</TableCell>
                  <TableCell>{visitor.purpose}</TableCell>
                  <TableCell>{visitor.checkIn}</TableCell>
                  <TableCell>{visitor.checkOut || '-'}</TableCell>
                  <TableCell>{visitor.host}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      visitor.status === 'checked-in' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {visitor.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} className="h-24 text-center">
                  No visitors found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination controls */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing {indexOfFirstVisitor + 1}-{Math.min(indexOfLastVisitor, filteredVisitors.length)} of {filteredVisitors.length} visitors
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => paginate(1)}
            disabled={currentPage === 1}
          >
            <ChevronsLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            let pageNum;
            if (totalPages <= 5) {
              pageNum = i + 1;
            } else if (currentPage <= 3) {
              pageNum = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNum = totalPages - 4 + i;
            } else {
              pageNum = currentPage - 2 + i;
            }
            return (
              <Button
                key={pageNum}
                variant={currentPage === pageNum ? "default" : "outline"}
                size="sm"
                onClick={() => paginate(pageNum)}
              >
                {pageNum}
              </Button>
            );
          })}
          <Button
            variant="outline"
            size="sm"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => paginate(totalPages)}
            disabled={currentPage === totalPages}
          >
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}