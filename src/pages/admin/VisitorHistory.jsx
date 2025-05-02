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
import { 
  ChevronLeft, 
  ChevronRight, 
  ChevronsLeft, 
  ChevronsRight,
  Search,
  User,
  Mail,
  Phone,
  Calendar,
  Clock,
  UserCheck,
  UserX
} from 'lucide-react';
import { Badge } from '@components/components/ui/badge';

export default function VisitorHistory() {
  // Generate 30 dummy visitor entries with more realistic data
  const generateDummyVisitors = () => {
    const firstNames = ['James', 'Mary', 'Robert', 'Patricia', 'John', 'Jennifer', 'Michael', 'Linda', 'David'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Garcia', 'Rodriguez'];
    const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'protonmail.com', 'icloud.com'];
    const purposes = ['Business Meeting', 'Job Interview', 'Package Delivery', 'Client Visit', 'Maintenance', 'Consultation'];
    const hosts = ['Sarah Johnson', 'Michael Brown', 'Emily Davis', 'David Wilson', 'Jessica Martinez'];
    
    return Array.from({ length: 30 }, (_, i) => {
      const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
      const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      const domain = domains[Math.floor(Math.random() * domains.length)];
      const checkInDate = new Date();
      checkInDate.setDate(checkInDate.getDate() - Math.floor(Math.random() * 30));
      
      const hasCheckedOut = Math.random() > 0.3;
      const checkOutDate = hasCheckedOut ? new Date(checkInDate) : null;
      if (checkOutDate) {
        checkOutDate.setHours(checkInDate.getHours() + Math.floor(Math.random() * 5) + 1);
      }
      
      return {
        id: (i + 1).toString(),
        name: `${firstName} ${lastName}`,
        email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`,
        phone: `(${Math.floor(100 + Math.random() * 900)}) ${Math.floor(100 + Math.random() * 900)}-${Math.floor(1000 + Math.random() * 9000)}`,
        purpose: purposes[Math.floor(Math.random() * purposes.length)],
        checkIn: checkInDate,
        checkOut: checkOutDate,
        host: hosts[Math.floor(Math.random() * hosts.length)],
        status: hasCheckedOut ? 'checked-out' : 'checked-in'
      };
    });
  };

  const [visitors] = useState(generateDummyVisitors());
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const visitorsPerPage = 5;

  // Filter visitors
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

  // Pagination logic
  const indexOfLastVisitor = currentPage * visitorsPerPage;
  const indexOfFirstVisitor = indexOfLastVisitor - visitorsPerPage;
  const currentVisitors = filteredVisitors.slice(indexOfFirstVisitor, indexOfLastVisitor);
  const totalPages = Math.ceil(filteredVisitors.length / visitorsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Format date
  const formatDate = (date) => {
    if (!date) return '-';
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Visitor History</h1>
              <p className="text-sm text-gray-500 mt-1">
                Track and manage all visitor entries
              </p>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search visitors..."
                className="pl-10 bg-gray-50 border-gray-200 focus-visible:ring-primary/50"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 overflow-hidden">
            <Table className="border-collapse">
              <TableHeader className="bg-gray-50">
                <TableRow className="hover:bg-transparent">
                  <TableHead className="py-3 px-4 text-gray-500 font-medium text-sm border-b">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Visitor
                    </div>
                  </TableHead>
                  <TableHead className="py-3 px-4 text-gray-500 font-medium text-sm border-b">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email
                    </div>
                  </TableHead>
                  <TableHead className="py-3 px-4 text-gray-500 font-medium text-sm border-b">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Phone
                    </div>
                  </TableHead>
                  <TableHead className="py-3 px-4 text-gray-500 font-medium text-sm border-b">
                    Purpose
                  </TableHead>
                  <TableHead className="py-3 px-4 text-gray-500 font-medium text-sm border-b">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Check In
                    </div>
                  </TableHead>
                  <TableHead className="py-3 px-4 text-gray-500 font-medium text-sm border-b">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Check Out
                    </div>
                  </TableHead>
                  <TableHead className="py-3 px-4 text-gray-500 font-medium text-sm border-b">
                    <div className="flex items-center gap-2">
                      <UserCheck className="h-4 w-4" />
                      Host
                    </div>
                  </TableHead>
                  <TableHead className="py-3 px-4 text-gray-500 font-medium text-sm border-b text-right">
                    Status
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="divide-y divide-gray-200">
                {currentVisitors.length > 0 ? (
                  currentVisitors.map((visitor) => (
                    <TableRow key={visitor.id} className="hover:bg-gray-50 transition-colors">
                      <TableCell className="py-3 px-4 border-b">
                        <div className="font-medium text-gray-800">{visitor.name}</div>
                        <div className="text-xs text-gray-500">ID: {visitor.id}</div>
                      </TableCell>
                      <TableCell className="py-3 px-4 border-b text-gray-600">
                        <a href={`mailto:${visitor.email}`} className="hover:text-primary hover:underline">
                          {visitor.email}
                        </a>
                      </TableCell>
                      <TableCell className="py-3 px-4 border-b text-gray-600">
                        <a href={`tel:${visitor.phone.replace(/[^\d]/g, '')}`} className="hover:text-primary hover:underline">
                          {visitor.phone}
                        </a>
                      </TableCell>
                      <TableCell className="py-3 px-4 border-b text-gray-600">
                        {visitor.purpose}
                      </TableCell>
                      <TableCell className="py-3 px-4 border-b text-gray-600">
                        {formatDate(visitor.checkIn)}
                      </TableCell>
                      <TableCell className="py-3 px-4 border-b text-gray-600">
                        {formatDate(visitor.checkOut)}
                      </TableCell>
                      <TableCell className="py-3 px-4 border-b text-gray-600">
                        {visitor.host}
                      </TableCell>
                      <TableCell className="py-3 px-4 border-b text-right">
                        <Badge 
                          variant={visitor.status === 'checked-in' ? 'default' : 'outline'}
                          className={`rounded-full px-3 py-1 text-xs font-medium ${
                            visitor.status === 'checked-in'
                              ? 'bg-green-100 text-green-800 hover:bg-green-100'
                              : 'bg-blue-100 text-blue-800 hover:bg-blue-100'
                          }`}
                        >
                          {visitor.status === 'checked-in' ? (
                            <span className="flex items-center gap-1">
                              <span className="h-2 w-2 rounded-full bg-green-500"></span>
                              Checked In
                            </span>
                          ) : (
                            <span className="flex items-center gap-1">
                              <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                              Checked Out
                            </span>
                          )}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={8} className="py-8 text-center">
                      <div className="flex flex-col items-center justify-center gap-2 text-gray-500">
                        <Search className="h-8 w-8" />
                        <p className="font-medium">No visitors found</p>
                        <p className="text-sm">Try adjusting your search query</p>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {/* Enhanced Pagination */}
          <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4">
            <div className="text-sm text-gray-500">
              Showing <span className="font-medium">{indexOfFirstVisitor + 1}</span> to{' '}
              <span className="font-medium">{Math.min(indexOfLastVisitor, filteredVisitors.length)}</span> of{' '}
              <span className="font-medium">{filteredVisitors.length}</span> visitors
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="sm"
                onClick={() => paginate(1)}
                disabled={currentPage === 1}
                className="h-8 w-8 p-0"
              >
                <ChevronsLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="h-8 w-8 p-0"
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
                    className="h-8 w-8 p-0"
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
                className="h-8 w-8 p-0"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => paginate(totalPages)}
                disabled={currentPage === totalPages}
                className="h-8 w-8 p-0"
              >
                <ChevronsRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}